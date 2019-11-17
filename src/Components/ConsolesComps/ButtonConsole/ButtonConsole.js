import React from 'react';

import classes from './ButtonConsole.module.css';

import LeftConsole from './LeftConsole/LeftConsole';
import RightConsole from './RightConsole/RightConsole';

const buttonConsole = props => {

  return (
    <div className={classes.ButtonConsole}>
      <LeftConsole 
        bet={props.bet}
        doubled={props.doubled}
        doubleDown={props.doubleDown} 
        purse={props.purse} 
        stand={props.stand} />
      <RightConsole 
        plrHit={props.plrHit}
        setStand={props.setStand}
        split={props.split}
        initRound={props.initRound} />
    </div> 
  )
}

export default buttonConsole;