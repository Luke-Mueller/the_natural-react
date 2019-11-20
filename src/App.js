import React, { useState } from 'react';

import Consoles from './Container/Consoles/Consoles';
import Deck from './Assets/deck/Deck';
import Hands from './Container/Hands/Hands';

import './App.css';

const App = () => {
  const [deck, setDeck] = useState(Deck);
  const [dlrHand, setDlrHand] = useState([]);
  const [leftHand, setLeftHand] = useState([]);
  const [plrHand, setPlrHand] = useState([]);
  const [rightHand, setRightHand] = useState([]);
  const [stand, setStand] = useState(false);
  const [wastePile, setWastePile] = useState([]);

  console.log('wp ', wastePile);
  console.log('deck ', deck);

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

  // Push from hand to deck
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
    setStand(false);
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

  //  Split hand functions

  const splitHand = setHand => {
    const splitCard = plrHand.pop();
    return setHand([splitCard])
  }

  const rightSplit = () => splitHand(setRightHand);
  const leftSplit = () => splitHand(setLeftHand);

  const splitHandler = () => {
    rightSplit();
    leftSplit();
  }

  const setStandHandler = () => {
    setStand(!stand)
  }

  return (
      <div className="App">
        <Hands
          dlrHand={dlrHand}
          leftHand={leftHand}
          plrHand={plrHand}
          rightHand={rightHand}
          stand={stand} />
        <Consoles 
          deal={dealHandler}
          deck={deck}
          dlrDraw={dlrDrawHandler}
          dlrHand={dlrHand}
          leftDraw={leftDrawHandler}
          leftHand={leftHand}
          plrHand={plrHand}
          plrDraw={plrDrawHandler}
          reShuffle={reShuffleHandler}
          rightDraw={rightDrawHandler}
          rightHand={rightHand}
          setStand={setStandHandler}
          shuffleDeck={shuffleDeckHandler}
          split={splitHandler} 
          stand={stand}
          waste={wasteCards} />
      </div>
  );
}

export default App;