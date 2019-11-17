import React from 'react'

import classes from './LeftConsole.module.css';

const LeftConsole = props => {

  let doubleDown;
  props.purse >= props.bet * 2 
    ? doubleDown = 
      <div className={classes.ButtonDiv}>
        <button className={classes.DoubleDown} onClick={props.doubleDown}/>
        <h4>Double Down</h4>
      </div>
    : doubleDown = null; 

  return (
    <div className={classes.LeftConsole}>
      {doubleDown}
      <div className={classes.ButtonDiv}>
        <button className={classes.Surrender}  />
        <h4>Surrender</h4>
      </div>
      <div className={classes.ButtonDiv}>
        <button className={classes.Insurance}  />
        <h4>Insurance</h4>
      </div>
    </div>
  )
}

export default LeftConsole;