import React from 'react';

import classes from './Purse.module.css';

const Purse = props => {
  let purse;
  props.purse ? purse = <h1>${props.purse}</h1> : purse = null;

  return (
    <div className={classes.Purse}>
      {purse}
    </div>
  )
}

export default Purse;