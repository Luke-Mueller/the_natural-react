import React, { useState, useEffect } from 'react';

import classes from './Consoles.module.css';

import BackDrop from '../../Components/ConsolesComps/BackDrop/BackDrop';
import ButtonConsole from '../../Components/ConsolesComps/ButtonConsole/ButtonConsole'
import ChipsConsole from '../../Components/ConsolesComps/ChipsConsole/ChipsConsole';
import Purse from '../../Components/ConsolesComps/Purse/Purse';
import StartModal from '../../Components/ConsolesComps/StartModal/StartModal';
import WagerConsole from '../../Components/ConsolesComps/WagerConsole/WagerConsole';
import Wager from '../../Components/ConsolesComps/Wager/Wager';

const Console = props => {
  const {
    dlrDraw, 
    dlrHand, 
    leftHand, 
    plrHand, 
    rightHand, 
    setBusted, 
    setStand,
    stand
  } = props;

  const [bet, setBet] = useState(0);
  const [betPlaced, setBetPlaced] = useState(false);
  const [dlrTotal, setDlrTotal] = useState(0);
  const [leftBet, setLeftBet] = useState(0);
  const [leftTotal, setLeftTotal] = useState(0);
  const [plrTotal, setPlrTotal] = useState(0);
  const [purse, setPurse] = useState(undefined);
  const [rightBet, setRightBet] = useState(0);
  const [rightTotal, setRightTotal] = useState(0);
  const [splitStand, setSplitStand] = useState(false);

  const addOneHandler = () => setBet(prevBet => prevBet + 1);
  const addFiveHandler = () => setBet(prevBet => prevBet + 5);
  const addTwentyFiveHandler = () => setBet(prevBet => prevBet + 25);
  const addOneHundredHandler = () => setBet(prevBet => prevBet + 100);
  const clearBetHandler = () => setBet(0);

  // Split function
  const setSplitStandHandler = () => {
    setSplitStand(true);
  }

  //  Calculate plr total
  useEffect(() => {

    // if no split / else if split
    if(plrHand.length) {
      let total = 0;
      plrHand.forEach(card => total += card.value);
      let checkedTotal = checkAceValue(total, plrHand);
      if(checkedTotal > 21) setBusted(true);
      setPlrTotal(checkedTotal);
    } else if (leftHand.length && rightHand.length) {
      //  Set bets
      if(!leftBet) {
        setLeftBet(bet);
        setRightBet(bet);
        setPurse(prevPurse => prevPurse -= bet);
      }

      let lChecked = 0;
      let lTotal = 0;
      let rChecked = 0;
      let rTotal = 0;

      //  left hand
      leftHand.forEach(card => lTotal += card.value);
      lChecked = checkAceValue(lTotal, leftHand);
      if(lChecked > 21) setSplitStand(true);
      setLeftTotal(lChecked);

      //  right hand
      rightHand.forEach(card => rTotal += card.value);
      rChecked = checkAceValue(rTotal, rightHand);
      setRightTotal(rChecked);
      if(lChecked > 21 && rChecked > 21) setBusted(true)
      if(lChecked < 22 && rChecked > 21) setStand(true);
    }
  }, [bet, leftBet, leftHand, plrHand, rightBet, rightHand, setBusted, setStand]);

  // Calculate dlr total
  useEffect(() => {
    let total = 0;
    dlrHand.forEach(card => {
      total += card.value
    })
    total = checkAceValue(total, dlrHand)
    if(stand && total < 17) {
      dlrDraw();
    }
    setDlrTotal(total)
  }, [dlrDraw, dlrHand, stand]);

  const checkAceValue = (roundTotal, hand) => {
    while (roundTotal > 21.5 && hand.find(card => card.value === 11)) {
      roundTotal = 0;
      const ace = hand.find(card => card.value === 11)
      ace.value = 1;
      // eslint-disable-next-line 
      hand.forEach(card => roundTotal += card.value)
    }
    return roundTotal;
  }

  const doubleDownHandler = () => {
    setBet(bet * 2);
    props.doubleDown();
  }

  const wagerPlacedHandler = () => {
    if(bet <= purse && bet > 0) {
      setPurse(purse - bet)
      if(bet > 0) {
        setBetPlaced(true)
        props.deal();
      }
    }
  };

  const submitPurseHandler = e => {
    const amount = e.target.amount.value;
    if(amount > 1 && amount < 10000) {
      props.shuffleDeck();
      setPurse(amount);
    } else {
      console.log('error')
    }
    e.preventDefault();
  }

  const initRoundHandler = () => {
    let winnings = 0;
    //  Check winner and payout
    if(leftHand.length === 0) {
      if(plrTotal < 22 && (plrTotal > dlrTotal || dlrTotal > 21)) {
        console.log(123)
        winnings = bet * 2;
      } else if(plrTotal < 22 && plrTotal === dlrTotal) {
        console.log(456)
        winnings = bet;
      } else if(props.doubled) {
        console.log(456)
        winnings = -(0.5 * bet);
      }  
    } else {
      if(leftTotal < 22 && (leftTotal > dlrTotal || dlrTotal > 21)) {
        console.log(789)
        winnings = bet * 2; 
      }
      if(rightTotal < 22 && (rightTotal > dlrTotal || dlrTotal > 21)) {
        console.log(101112)
        winnings += bet * 2
      }
    }
    setPurse(prevPurse => prevPurse + winnings);

    //  Reset props
    setBet(0);
    setBetPlaced(false);
    props.setBusted(false);
    setDlrTotal(0);
    setLeftTotal(0);
    setPlrTotal(0);
    setRightTotal(0);
    setLeftBet(0);
    setRightBet(0);
    setSplitStand(false);
    if(props.doubled) props.doubleDown();
    if(stand) setStand(false);

    props.waste()
    // Check reshuffle
    // props.deck.length < 78 
    //   ? props.reShuffle()
    //   : props.waste();
  }

  let consoles;
  let startModal;
  if(purse + bet < 1 || purse === undefined) {
    startModal = 
      <BackDrop>
        <StartModal submit={submitPurseHandler}/>
      </BackDrop>
  } else {
    startModal = null;
  }
  if(!betPlaced && purse) { 
    consoles = (
      <div>
        <WagerConsole  
          bet={bet} 
          clearBet={clearBetHandler} 
          wagerPlaced={wagerPlacedHandler} /> 
        <ChipsConsole 
          addOne={addOneHandler}
          addFive={addFiveHandler}
          addTwentyFive={addTwentyFiveHandler}
          addOneHundred={addOneHundredHandler} />
        <Purse purse={purse} />
      </div>
    )
  } else if(betPlaced) {
    consoles = (
      <div>
        <ButtonConsole 
          bet={bet}
          busted={props.busted}
          deal={props.deal}
          doubled={props.doubled}
          doubleDown={doubleDownHandler}
          initRound={initRoundHandler}
          leftDraw={props.leftDraw}
          leftHand={props.leftHand}
          plrDraw={props.plrDraw}
          plrHand={props.plrHand}
          purse={purse}
          rightDraw={props.rightDraw}
          rightHand={props.rightHand}
          setSplitStand={setSplitStandHandler}
          setStand={props.setStand}
          split={props.split}
          splitStand={splitStand}
          stand={props.stand} />
        <Purse purse={purse} />
        <Wager 
          bet={bet}
          leftBet={leftBet}
          rightBet={rightBet} />
      </div>
    )
  } 

  return (
    <div className={classes.MoneyConsole}>
      {startModal}
      {consoles}
    </div>
  )
}

export default Console;