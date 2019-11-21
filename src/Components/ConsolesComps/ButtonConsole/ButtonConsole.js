import React from 'react';

import classes from './ButtonConsole.module.css';

import LeftConsole from './LeftConsole/LeftConsole';
import RightConsole from './RightConsole/RightConsole';

const buttonConsole = props => {
  return (
    <div className={classes.ButtonConsole}>
      <LeftConsole 
        bet={props.bet}
        busted={props.busted}
        doubled={props.doubled}
        doubleDown={props.doubleDown}
        plrHand={props.plrHand} 
        purse={props.purse} 
        stand={props.stand} />
      <RightConsole 
        busted={props.busted}
        leftDraw={props.leftDraw}
        leftHand={props.leftHand}
        plrDraw={props.plrDraw}
        plrHand={props.plrHand}
        rightDraw={props.rightDraw}
        rightHand={props.rightHand}
        setSplitStand={props.setSplitStand}
        setStand={props.setStand}
        split={props.split}
        splitStand={props.splitStand}
        stand={props.stand}
        initRound={props.initRound} />
    </div> 
  )
}

export default buttonConsole;