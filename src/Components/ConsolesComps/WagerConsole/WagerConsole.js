import React from 'react';

import classes from './WagerConsole.module.css'

const WagerConsole = props => {
  return (
    <div className={classes.WagerConsole}>
        <h1>{props.bet}</h1>
        <div className={classes.WagerButtons}>
          <button onClick={props.clearBet}>Clear Wager</button>
          <button onClick={props.wagerPlaced}>Place Wager</button>
        </div>
      </div>
  )
}

export default WagerConsole;