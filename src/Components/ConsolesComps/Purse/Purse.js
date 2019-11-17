import React from 'react';

import classes from './Purse.module.css';

const Purse = props => {
  return (
    <div className={classes.Purse}>
      <h1>{props.purse}</h1>
    </div>
  )
}

export default Purse;