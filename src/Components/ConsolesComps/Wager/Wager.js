import React from 'react';

import classes from './Wager.module.css';

const Wager = props => {
  return (
    <div className={classes.Wager} >
      <h2>{props.bet}</h2>
    </div>
  )
}

export default Wager;
