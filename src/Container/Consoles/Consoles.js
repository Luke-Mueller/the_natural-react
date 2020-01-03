import React, { useState, useEffect, useContext } from 'react';

import classes from './Consoles.module.css';
import styles from './ButtonConsole.module.css';

import AppContext from '../../context/app-context';
import BackDrop from '../../Components/ConsolesComps/BackDrop/BackDrop';
import ChipsConsole from '../../Components/ConsolesComps/ChipsConsole/ChipsConsole';
import LeftConsole from '../../Components/ConsolesComps/LeftConsole/LeftConsole';
import Purse from '../../Components/ConsolesComps/Purse/Purse';
import RightConsole from '../../Components/ConsolesComps/RightConsole/RightConsole';
import StartModal from '../../Components/ConsolesComps/StartModal/StartModal';
import WagerConsole from '../../Components/ConsolesComps/WagerConsole/WagerConsole';
import Wager from '../../Components/ConsolesComps/Wager/Wager';

const Console = () => {

  const global = useContext(AppContext)

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

  const addFiveHandler = () => setBet(prevBet => prevBet + 5);
  const addTwentyFiveHandler = () => setBet(prevBet => prevBet + 25);
  const addOneHundredHandler = () => setBet(prevBet => prevBet + 100);
  const addFiveHundredHandler = () => setBet(prevBet => prevBet + 500);
  const clearBetHandler = () => setBet(0);

  // Split function
  const setSplitStandHandler = () => {
    setSplitStand(true);
    global.rightDraw();
  }

  //  Calculate plr total
  useEffect(() => {

    // if no split / else if split
    if (global.plrHand.length) {
      let total = 0;
      global.plrHand.forEach(card => total += card.value);
      let checkedTotal = checkAceValue(total, global.plrHand);
      if(checkedTotal > 21) global.setBusted(true);
      setPlrTotal(checkedTotal);
    } else if (global.leftHand.length && global.rightHand.length) {
      //  Set bets
      if (!leftBet) {
        setLeftBet(bet);
        setRightBet(bet);
        setPurse(prevPurse => prevPurse -= bet);
      }

      let lChecked = 0;
      let lTotal = 0;
      let rChecked = 0;
      let rTotal = 0;

      //  left hand
      global.leftHand.forEach(card => lTotal += card.value);
      lChecked = checkAceValue(lTotal, global.leftHand);
      if (lChecked > 21) setSplitStand(true);
      setLeftTotal(lChecked);

      //  right hand
      global.rightHand.forEach(card => rTotal += card.value);
      rChecked = checkAceValue(rTotal, global.rightHand);
      setRightTotal(rChecked);
      if (lChecked > 21 && rChecked > 21) global.setBusted(true)
      if (lChecked < 22 && rChecked > 21) global.setStand(true);
    }
  }, [global, bet, leftBet, global.leftHand, global.plrHand, rightBet, global.rightHand, global.setBusted, global.setStand]);

  // Calculate dlr total
  useEffect(() => {
    let total = 0;
    global.dlrHand.forEach(card => {
      total += card.value
    })
    total = checkAceValue(total, global.dlrHand)
    if (global.stand && total < 17) {
      global.dlrDraw();
    }
    setDlrTotal(total)
  }, [global, global.dlrDraw, global.dlrHand, global.stand]);

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
    setPurse(prevPurse => prevPurse - bet);
    global.doubleDown();
  }

  const wagerPlacedHandler = () => {
    if (bet <= purse && bet > 0) {
      setPurse(purse - bet)
      if (bet > 0) {
        setBetPlaced(true)
        global.deal();
      }
    }
  };

  const submitPurseHandler = e => {
    const amount = e.target.amount.value;
    if (amount > 1 && amount < 10000) {
      global.shuffleDeck();
      setPurse(amount);
    } else {
      console.log('error')
    }
    e.preventDefault();
  }

  const initRoundHandler = () => {
    let winnings = 0;
    //  Check and payout winner 
    if (global.leftHand.length === 0) {
      if (plrTotal < 22 && (plrTotal > dlrTotal || dlrTotal > 21)) winnings = bet * 2
      else if (plrTotal < 22 && plrTotal === dlrTotal) winnings = bet;
    } else {
      if (leftTotal < 22 && (leftTotal > dlrTotal || dlrTotal > 21)) winnings = bet * 2;
      if (rightTotal < 22 && (rightTotal > dlrTotal || dlrTotal > 21)) winnings += bet * 2;
    }
    setPurse(prevPurse => prevPurse + winnings);

    //  Reset props
    setBet(0);
    setBetPlaced(false);
    global.setBusted(false);
    setDlrTotal(0);
    setLeftTotal(0);
    setPlrTotal(0);
    setRightTotal(0);
    setLeftBet(0);
    setRightBet(0);
    setSplitStand(false);
    if (global.doubled) global.doubleDown();
    if (global.stand) global.setStand(false);

    global.waste()
    // Check reshuffle
    global.deck.length < 78 
      ? global.reShuffle()
      : global.waste();
  }

  let consoles;
  let startModal;

  if (purse + bet < 1 || purse === undefined) {
    startModal = 
      <BackDrop>
        <StartModal submit={submitPurseHandler}/>
      </BackDrop>
  } else {
    startModal = null;
  }
  if (!betPlaced && purse) { 
    consoles = (
      <div>
        <WagerConsole  
          bet={bet} 
          clearBet={clearBetHandler} 
          wagerPlaced={wagerPlacedHandler} /> 
        <ChipsConsole 
          addFive={addFiveHandler}
          addTwentyFive={addTwentyFiveHandler}
          addOneHundred={addOneHundredHandler}
          addFiveHundred={addFiveHundredHandler} />
        <Purse purse={purse} />
      </div>
    )
  } else if (betPlaced) {
    consoles = (
      <div>
        <AppContext.Consumer>
          {context => 
            <div className={styles.ButtonConsole}>
              <LeftConsole 
                bet={bet}
                doubleDown={doubleDownHandler}
                purse={purse} />
              <RightConsole 
                setSplitStand={setSplitStandHandler}
                splitStand={splitStand}
                initRound={initRoundHandler} />
            </div> 
          }
        </AppContext.Consumer>
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