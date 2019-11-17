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

  const {plrHand, dlrHand} = props;
  const [bet, setBet] = useState(0);
  const [dlrTotal, setDlrTotal] = useState(0);
  const [placed, setPlaced] = useState(false);
  const [plrTotal, setPlrTotal] = useState(0);
  const [purse, setPurse] = useState(undefined);

  console.log('plrTotal: ', plrTotal);
  console.log('dlrTotal: ', dlrTotal);

  useEffect(() => {
    let total = 0;
    plrHand.forEach(card => {
      total += card.value
    })
    setPlrTotal(total);
  }, [plrHand]);

  useEffect(() => {
    let total = 0;
    dlrHand.forEach(card => {
      total += card.value
    })
    setDlrTotal(total);
  }, [dlrHand]);
  
  const addOneHandler = () => setBet(prevBet => prevBet + 1);
  const addFiveHandler = () => setBet(prevBet => prevBet + 5);
  const addTwentyFiveHandler = () => setBet(prevBet => prevBet + 25);
  const addOneHundredHandler = () => setBet(prevBet => prevBet + 100);
  const clearBetHandler = () => setBet(0);
  
  const wagerPlacedHandler = () => {
    if(bet <= purse && bet > 0) {
      setPurse(purse - bet)
      if(bet > 0) {
        setPlaced(true)
        props.deal();
      }
    }
  };

  const doubleDownHandler = () => setBet(prevBet => prevBet * 2);

  const submitPurseHandler = e => {
    const amount = e.target.amount.value;

    if(amount > 1 && amount < 10000) {
      props.shuffleDeck();
      setPurse(amount);
      // setModal(false);
    } else {
      console.log('error')
    }
    e.preventDefault();
  }

  const standHandler = () => {
    props.stand();
    if(plrTotal > dlrTotal) {
      console.log('player wins')
    } else if(plrTotal < dlrTotal) {
      console.log('dealer wins')
    } else {
      console.log('push')
    }
  }

  const initRoundHandler = () => {
    setPurse(purse + bet * 2)
    props.waste();
    setBet(0);
    setPlaced(false);
  }

  let startModal;
  if(purse + bet < 2 || purse === undefined) {
    startModal = 
      <BackDrop>
        <StartModal submit={submitPurseHandler}/>
      </BackDrop>
  } else {
    startModal = null;
  }
  
  let consoles;
  if(!placed && purse) { 
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
  } else if(placed <= purse) {
    consoles = (
      <div>
        <Wager bet={bet} />
        <Purse purse={purse} />
        <ButtonConsole 
          deal={props.deal}
          doubleDown={doubleDownHandler}
          initRound={initRoundHandler}
          plrHit={props.plrHit}
          see={props.see}
          shuffleDeck={props.shuffleDeck}
          split={props.split}
          stand={standHandler}/>
      </div>
    )
  } else if (placed > purse) {
    setPlaced(false)
    console.log('error')
  }

  return (
    <div className={classes.MoneyConsole}>
      {startModal}
      {consoles}
    </div>
  )
}

export default Console;