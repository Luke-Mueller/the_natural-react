import React, { useContext } from 'react'

import classes from './LeftConsole.module.css';
import AppContext from '../../../context/app-context';

const LeftConsole = props => {
  const global = useContext(AppContext);

  let doubleDown,
      surrender,
      insurance;

  if (props.purse >= props.bet && !global.doubled && !global.stand && global.plrHand.length === 2) { 
    doubleDown = 
      <div className={classes.ButtonDiv}>
        <button className={classes.DoubleDown} onClick={props.doubleDown}/>
        <h4>Double Down</h4>
      </div>
  }
  if (!global.stand && global.plrHand.length === 2) {
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
  if (global.busted) {
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