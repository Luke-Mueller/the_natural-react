import React, { useState } from 'react'

import classes from './RightConsole.module.css';

const RightConsole = props => {
  const [splitStand, setSplitStand] = useState(false);

  const setSplitStandHandler = () => {
    setSplitStand(!splitStand);
    console.log('splitStand: ', splitStand)
  }

  const initRoundHandler = () => {
    setSplitStand(false);
    props.initRound();
  }

  let draw,
      stand,
      split,
      next;
  
  // Draw conditional rendering
  if(!props.stand && !props.busted && props.plrHand.length) {
    draw = 
      <div className={classes.ButtonDiv}>
        <button className={classes.Draw} onClick={props.plrDraw} />
        <h4>Hit</h4>
      </div> 
  } else if(props.rightHand.length === 1 && !splitStand && !props.stand) {
    draw =
      <div className={classes.ButtonDiv}>
        <button className={classes.Draw} onClick={props.leftDraw} />
        <h4>Hit</h4>
      </div> 
  } else if(splitStand && !props.stand) {
    draw =
      <div className={classes.ButtonDiv}>
        <button className={classes.Draw} onClick={props.rightDraw} />
        <h4>Hit</h4>
      </div> 
  }
  
  // Stand  conditional rendering
  if(
    (!props.stand && !props.busted && props.plrHand.length) 
    || (splitStand && !props.stand && props.rightHand.length > 1)
  ) {
    stand = 
      <div className={classes.ButtonDiv}>
        <button className={classes.Stand} onClick={props.setStand} />
        <h4>Stand</h4>
      </div> 
  } else if(props.rightHand.length === 1 && props.leftHand.length > 1 && !splitStand) {
    stand = 
      <div className={classes.ButtonDiv}>
        <button className={classes.Stand} onClick={setSplitStandHandler} />
        <h4>SplitStand</h4>
      </div> 
  }

  // Split conditional rendering
  if(props.plrHand.length === 2 && props.plrHand[0].rank === props.plrHand[1].rank && !props.stand) {
    split =
      <div className={classes.ButtonDiv}>
        <button className={classes.Split} onClick={props.split} />
        <h4>Split</h4>
      </div>
  }

  // Next conditional rendering
  if(props.stand || props.busted) {
    next = 
      <div className={classes.ButtonDiv}>
        <button className={classes.Next} onClick={initRoundHandler} />
        <h4>Next Hand</h4>
      </div>
  }

  return (
    <div className={classes.RightConsole}>
      {draw}
      {stand}
      {split}
      {next}    
    </div>
  )
}

export default RightConsole;