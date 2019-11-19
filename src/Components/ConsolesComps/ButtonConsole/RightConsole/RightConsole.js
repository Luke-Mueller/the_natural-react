import React from 'react'

import classes from './RightConsole.module.css';

const RightConsole = props => {

  let hit,
      stand,
      split,
      next;
      
  if(props.setCanSplit) { 
    split = 
      <div className={classes.ButtonDiv}>
        <button className={classes.Split} onClick={props.split} />
        <h4>Split</h4>
      </div>
  }
  if(!props.stand) {
    hit = 
      <div className={classes.ButtonDiv}>
        <button className={classes.Hit} onClick={props.plrDraw} />
        <h4>Hit</h4>
      </div>
    stand =
      <div className={classes.ButtonDiv}>
        <button className={classes.Stand} onClick={props.setStand} />
        <h4>Stand</h4>
      </div> 
  } else {
    next =
      <div className={classes.ButtonDiv}>
        <button className={classes.Next} onClick={props.initRound} />
        <h4>Next Hand</h4>
      </div>
  }
  if(props.plrHand.length === 2 && props.plrHand[0].rank === props.plrHand[1].rank && !props.stand) {
    split =
      <div className={classes.ButtonDiv}>
        <button className={classes.Split} onClick={props.split} />
        <h4>Split</h4>
      </div>
  } else {
    split = null;
  }
  if(props.busted) {
    hit = null;
    stand = null;
    split = null;
    next = 
      <div className={classes.ButtonDiv}>
        <button className={classes.Next} onClick={props.initRound} />
        <h4>Next Hand</h4>
      </div>
  }

  return (
    <div className={classes.RightConsole}>
      {hit}
      {stand}
      {split}
      {next}    
    </div>
  )
}

export default RightConsole;