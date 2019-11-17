import React from 'react';

import classes from './ButtonConsole.module.css';

import LeftConsole from './LeftConsole/LeftConsole';
import RightConsole from './RightConsole/RightConsole';

const buttonConsole = props => {

  return (
    <div className={classes.ButtonConsole}>
      <LeftConsole 
        bet={props.bet}
        doubleDown={props.doubleDown} 
        purse={props.purse} />
      <RightConsole 
        plrHit={props.plrHit}
        stand={props.stand}
        split={props.split}
        initRound={props.initRound} />
    </div> 
  )
}

export default buttonConsole;