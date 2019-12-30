import React from 'react';

const AppContext = React.createContext({
  busted: false,
  deal: () => {},
  deck: [],
  dlrDraw: () => {},
  dlrHand: [],
  doubled: false,
  doubleDown: () => {},
  leftDraw: () => {},
  leftHand: [],
  plrDraw: () => {},
  plrHand: [],
  reshuffle: () => {},
  rightDraw: () => {},
  rightHand: [],
  setBusted: () => {},
  setStand: () => {},
  shuffleDeck: () => {},
  split: () => {},
  stand: false,
  waste: () => {}
});

export default AppContext;