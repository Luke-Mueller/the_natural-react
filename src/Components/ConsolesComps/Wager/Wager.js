import React from 'react';

import classes from './Wager.module.css';

const Wager = props => {
  let wager;
  if(props.leftBet === 0 && props.rightBet === 0) {
    wager =
      <div className={classes.Wager} >
        <h2>{props.bet}</h2>
      </div>
  } else if(props.leftBet !== 0 && props.rightBet !== 0) {
    wager =
      <div>
        <div className={classes.WagerLeft} >
          <h2>left bet {props.leftBet}</h2>
        </div>
        <div className={classes.WagerRight} >
          <h2>right bet {props.rightBet}</h2>
        </div>
      </div>
  }
  return (
    <div>
      {wager}
    </div>
  )
}

export default Wager;
