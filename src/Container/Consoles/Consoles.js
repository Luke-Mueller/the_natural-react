import React, { useState, useEffect } from 'react';

import classes from './Consoles.module.css';

import BackDrop from '../../Components/ConsolesComps/BackDrop/BackDrop';
import ButtonConsole from '../../Components/ConsolesComps/ButtonConsole/ButtonConsole'
import ChipsConsole from '../../Components/ConsolesComps/ChipsConsole/ChipsConsole';
import Purse from '../../Components/ConsolesComps/Purse/Purse';
import StartModal from '../../Components/ConsolesComps/StartModal/StartModal';
import WagerConsole from '../../Components/ConsolesComps/WagerConsole/WagerConsole';
import Wager from '../../Components/ConsolesComps/Wager/Wager';
import deck from '../../Assets/deck/Deck';

const Console = props => {

  const [bet, setBet] = useState(0);
  const [busted, setBusted] = useState(false);
  const [dlrTotal, setDlrTotal] = useState(0);
  const [betPlaced, setBetPlaced] = useState(false);
  const [plrTotal, setPlrTotal] = useState(0);
  const [purse, setPurse] = useState(undefined);

  const addOneHandler = () => setBet(prevBet => prevBet + 1);
  const addFiveHandler = () => setBet(prevBet => prevBet + 5);
  const addTwentyFiveHandler = () => setBet(prevBet => prevBet + 25);
  const addOneHundredHandler = () => setBet(prevBet => prevBet + 100);
  const clearBetHandler = () => setBet(0);

  // Calculate plr total
  useEffect(() => {
    let total = 0;
    props.plrHand.forEach(card => {
      total += card.value
    })
    let checkedTotal = checkAceValue(total, props.plrHand);
    if(checkedTotal > 21) setBusted(true);
    setPlrTotal(checkedTotal)
  }, [props.plrHand]);

  // Calculate dlr total
  useEffect(() => {
    let total = 0;
    props.dlrHand.forEach(card => {
      total += card.value
    })
    total = checkAceValue(total, props.dlrHand)
    if(props.stand && total < 17) {
      props.dlrDraw();
    }
    setDlrTotal(total)
  }, [props]);

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
    props.doubleDown()
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
    setBet(0);
    setBetPlaced(false);
    setBusted(false);
    setDlrTotal(0);
    setPlrTotal(0);
    if(props.doubled) props.doubleDown();
    if(props.stand) props.setStand();
    if(dlrTotal > 21 || (plrTotal < 22 && plrTotal > dlrTotal)) {
      setPurse(purse + bet * 2)
    } else if(plrTotal === dlrTotal) {
      setPurse(purse + bet)
    } 
    deck.length < 78 
      ? props.reShuffle()
      : props.waste();
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
          busted={busted}
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
          setStand={props.setStand}
          split={props.split}
          stand={props.stand} />
        <Purse purse={purse} />
        <Wager bet={bet} />
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