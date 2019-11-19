import React, { useState } from 'react';

import Consoles from './Container/Consoles/Consoles';
import Deck from './Assets/deck/Deck';
import Hands from './Container/Hands/Hands';

import './App.css';

const App = () => {
  const [canSplit, setCanSplit] = useState(false);
  const [deck, setDeck] = useState(Deck);
  const [didSplit, setDidSplit] = useState(false);
  const [dlrHand, setDlrHand] = useState([]);
  const [leftHand, setLeftHand] = useState([]);
  const [plrHand, setPlrHand] = useState([]);
  const [rightHand, setRightHand] = useState([]);
  const [stand, setStand] = useState(false);
  const [wastePile, setWastePile] = useState([]);

  const setCanSplitHandler = () => {
    setCanSplit(!canSplit)
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

  //  Reshuffle
  if(deck.length <= 78) {
    while(wastePile.length) {
      const card = wastePile.pop();
      deck.push(card);
    };
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

  const plrDrawHandler = () => drawHandler(setPlrHand)
  const dlrDrawHandler = () => drawHandler(setDlrHand)


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
    drawHandler(setLeftHand);
    drawHandler(setRightHand)
    setDidSplit(true)
  }


  //  WastePile functions

  const wasteHand = hand => {
    while(hand.length) {
      const wasteCard = hand.pop();
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
          didSplit={didSplit}
          dlrDraw={dlrDrawHandler}
          dlrHand={dlrHand}
          plrHand={plrHand}
          plrDraw={plrDrawHandler}
          setCanSplit={setCanSplitHandler}
          setStand={setStandHandler}
          shuffleDeck={shuffleDeckHandler}
          split={splitHandler} 
          stand={stand}
          waste={wasteCards} />
      </div>
  );
}

export default App;