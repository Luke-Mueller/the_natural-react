import React from 'react'

import classes from './LeftConsole.module.css';

const LeftConsole = props => {

  let doubleDown,
      surrender,
      insurance;
  if(props.purse >= props.bet && !props.doubled && !props.stand) { 
    doubleDown = 
      <div className={classes.ButtonDiv}>
        <button className={classes.DoubleDown} onClick={props.doubleDown}/>
        <h4>Double Down</h4>
      </div>
  }
  if(!props.stand) {
    surrender =  
      <div className={classes.ButtonDiv}>
        <button className={classes.Surrender} />
        <h4>Surrender</h4>
      </div>
    insurance = 
      <div className={classes.ButtonDiv}>
        <button className={classes.Insurance}  />
        <h4>Insurance</h4>
      </div>
  }
  if(props.busted) {
    doubleDown = null;
    surrender = null;
    insurance = null;
  }
     
  return (
    <div className={classes.LeftConsole}>
      {doubleDown}
      {surrender}
      {insurance}
    </div>
  )
}

export default LeftConsole;