import React from 'react';

import classes from './ButtonConsole.module.css';

const buttonConsole = props => {

  return (
    <div className={classes.ButtonConsole}>
      <div className={classes.ButtonDiv}>
        <button className={classes.DoubleDown} onClick={props.doubleDown}/>
        <h4>Double Down</h4>
      </div>
      <div className={classes.ButtonDiv}>
        <button className={classes.Hit} onClick={props.plrHit} />
        <h4>Hit</h4>
      </div>
      <div className={classes.ButtonDiv}>
        <button className={classes.Stand} onClick={props.stand} />
        <h4>Stand</h4>
      </div>
      <div className={classes.ButtonDiv}>
        <button className={classes.Split} onClick={props.split} />
        <h4>Split</h4>
      </div>
      <div className={classes.ButtonDiv}>
        <button className={classes.Surrender} onClick={props.see} />
        <h4>Surrender</h4>
      </div>
      <div className={classes.ButtonDiv}>
        <button className={classes.Insurance} onClick={props.deal} />
        <h4>Insurance</h4>
      </div>
      <div className={classes.ButtonDiv}>
        <button className={classes.Next} onClick={props.initRound} />
        <h4>Next Hand</h4>
      </div>
    </div> 
  )
}

export default buttonConsole;