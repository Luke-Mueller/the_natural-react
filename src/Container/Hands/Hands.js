import React, { useContext } from 'react';

import AppContext from '../../context/app-context';
import DealerHand from '../../Components/HandsComps/DealerHand/DealerHand';
import LeftHand from '../../Components/HandsComps/LeftHand/LeftHand';
import PlayerHand from '../../Components/HandsComps/PlayerHand/PlayerHand';
import RightHand from '../../Components/HandsComps/RightHand/RightHand';

const Hands = () => {
  
  const global = useContext(AppContext);

  let dlrHand,
      leftHand,
      plrHand,
      rightHand;

  global.dlrHand.length 
    ? dlrHand = 
      <DealerHand 
        busted={global.busted}
        dlrHand={global.dlrHand} 
        stand={global.stand} /> 
    : dlrHand = null;
  global.leftHand.length 
    ? leftHand = <LeftHand leftHand={global.leftHand} /> 
    : leftHand = null;
  global.plrHand.length 
    ? plrHand = 
      <PlayerHand 
        plrHand={global.plrHand}
        doubled={global.doubled} /> 
    : plrHand = null;
  global.rightHand.length 
    ? rightHand = <RightHand rightHand={global.rightHand} /> 
    : rightHand = null;

  return(
    <div>
      {dlrHand}
      {leftHand}
      {plrHand}
      {rightHand}
    </div>
  )
}

export default Hands;