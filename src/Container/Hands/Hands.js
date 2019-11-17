import React from 'react';

import DealerHand from '../../Components/HandsComps/DealerHand/DealerHand';
import LeftHand from '../../Components/HandsComps/LeftHand/LeftHand';
import PlayerHand from '../../Components/HandsComps/PlayerHand/PlayerHand';
import RightHand from '../../Components/HandsComps/RightHand/RightHand';

const Hands = props => {
  let dealerHand,
    leftHand,
    plrHand,
    rightHand;

  props.dlrHand.length 
    ? dealerHand = 
      <DealerHand 
        dlrHand={props.dlrHand} 
        stand={props.stand} /> 
    : dealerHand = null;
  props.leftHand.length ? leftHand = <LeftHand leftHand={props.leftHand} /> : leftHand = null;
  props.plrHand.length ? plrHand = <PlayerHand plrHand={props.plrHand} /> : plrHand = null;
  props.rightHand.length ? rightHand = <RightHand rightHand={props.rightHand} /> : rightHand = null;

  return(
    <div>
      {dealerHand}
      {leftHand}
      {plrHand}
      {rightHand}
    </div>
  )
}

export default Hands;