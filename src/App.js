import React, { useState } from 'react';

import AppContext from './context/app-context';
import Consoles from './Container/Consoles/Consoles';
import Deck from './Assets/deck/Deck';
import Hands from './Container/Hands/Hands';

import './App.css';

const App = () => {
  const [busted, setBusted] = useState(false);
  const [deck, setDeck] = useState(Deck);
  const [dlrHand, setDlrHand] = useState([]);
  const [doubled, setDoubled] = useState(false);
  const [leftHand, setLeftHand] = useState([]);
  const [plrHand, setPlrHand] = useState([]);
  const [rightHand, setRightHand] = useState([]);
  const [stand, setStand] = useState(false);
  const [wastePile, setWastePile] = useState([]);

  //  WastePile functions
  const wasteHand = hand => {
    while(hand.length) {
      const wasteCard = hand.pop();
      if(wasteCard.rank === 'ace') wasteCard.value = 11;
      setWastePile(prevPile => [
        ...prevPile,
        wasteCard
      ])
    }
  }

  const wasteCards = () => {
    wasteHand(dlrHand);
    wasteHand(plrHand);
    wasteHand(leftHand);
    wasteHand(rightHand);
  }

  //  Shuffle functions
  const shuffleDeckHandler = () => {
    let shuffledDeck = [];

    while (deck.length) {
      const randomNum = Math.floor(Math.random() * deck.length - 1);
      const randomCard = deck.splice(randomNum, 1)[0];
      shuffledDeck.push(randomCard);  
    }
    return setDeck(shuffledDeck);
  }

  //  Reshuffle functions
  const pushFromHand = (hand) => {
    let card;
    while(hand.length) {
      card = hand.pop();
      deck.push(card);
    }
  }

  const reShuffleHandler = () => {
    pushFromHand(dlrHand);
    pushFromHand(leftHand);
    pushFromHand(plrHand);
    pushFromHand(rightHand);
    pushFromHand(wastePile);
    shuffleDeckHandler();
  }

  //  Draw cards functions
  const dealHandler = () => {
    for(let i = 0; i < 4; i++) {
      if(i === 0 || i === 2) plrDrawHandler()
      if(i === 1 || i === 3) dlrDrawHandler()
    }
  }
  
  const drawHandler = setHand => {
    const hitCard = deck.pop();
    return setHand(prevHand => [
      ...prevHand,
      hitCard
    ])
  }

  const dlrDrawHandler = () => drawHandler(setDlrHand)
  const leftDrawHandler = () => drawHandler(setLeftHand)
  const plrDrawHandler = () => drawHandler(setPlrHand)
  const rightDrawHandler = () => drawHandler(setRightHand)

  //  Double Down functions
  const doubleDownHandler = () => {
    setDoubled(!doubled);
    if(!doubled) {
      plrDrawHandler();
      setStand(true);
    }
  }

  //  Split hand functions
  const leftSplit = () => splitHand(setLeftHand);
  const rightSplit = () => splitHand(setRightHand);

  const splitHand = setHand => {
    const splitCard = plrHand.pop();
    return setHand([splitCard])
  }

  const splitHandler = () => {
    rightSplit();
    leftSplit();
    leftDrawHandler();
  }

  // Stand functions
  const setStandHandler = res => {
    setStand(res)
  }

  return (
      <div className="App">
        <AppContext.Provider 
          value={{
            busted: busted,
            deal: dealHandler,
            deck: deck,
            dlrDraw: dlrDrawHandler,
            dlrHand: dlrHand,
            doubled: doubled,
            doubleDown: doubleDownHandler,
            leftDraw: leftDrawHandler,
            leftHand: leftHand,
            plrDraw: plrDrawHandler,
            plrHand: plrHand,
            reshuffle: reShuffleHandler,
            rightDraw: rightDrawHandler,
            rightHand: rightHand,
            setBusted: setBusted,
            setStand: setStandHandler,
            shuffleDeck: shuffleDeckHandler,
            split: splitHandler,
            stand: stand,
            waste: wasteCards
          }}>
          <Hands />
          <Consoles />
        </AppContext.Provider>
      </div>
  );
}

export default App;