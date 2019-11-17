import React from 'react'

import classes from './RightConsole.module.css';

const RightConsole = props => {
  return (
    <div className={classes.RightConsole}>
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
        <button className={classes.Next} onClick={props.initRound} />
        <h4>Next Hand</h4>
      </div>
    </div>
  )
}

export default RightConsole;