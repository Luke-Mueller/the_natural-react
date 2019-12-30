import React, { useContext } from 'react'

import classes from './RightConsole.module.css';
import AppContext from '../../../context/app-context';

const RightConsole = props => {
  const global = useContext(AppContext);

  let draw,
      stand,
      split,
      next;
  
  // Draw conditional rendering
  if(!global.busted && !global.stand && !global.busted && global.plrHand.length) {
    draw = 
      <div className={classes.ButtonDiv}>
        <button className={classes.Draw} onClick={global.plrDraw} />
        <h4>Hit</h4>
      </div> 
  } else if(!global.busted && global.rightHand.length === 1 && !props.splitStand && !global.stand) {
    draw =
      <div className={classes.ButtonDiv}>
        <button className={classes.Draw} onClick={global.leftDraw} />
        <h4>Hit</h4>
      </div> 
  } else if(!global.busted && props.splitStand && !global.stand) {
    draw =
      <div className={classes.ButtonDiv}>
        <button className={classes.Draw} onClick={global.rightDraw} />
        <h4>Hit</h4>
      </div> 
  }
  
  // Stand  conditional rendering
  if(
    (!global.stand && !global.busted && global.plrHand.length) 
    || (!global.busted && props.splitStand && !global.stand && global.rightHand.length > 1)
  ) {
    stand = 
      <div className={classes.ButtonDiv}>
        <button className={classes.Stand} onClick={global.setStand} />
        <h4>Stand</h4>
      </div> 
  } else if(global.rightHand.length === 1 && global.leftHand.length > 1 && !props.splitStand) {
    stand = 
      <div className={classes.ButtonDiv}>
        <button className={classes.Stand} onClick={props.setSplitStand} />
        <h4>SplitStand</h4>
      </div> 
  }

  // Split conditional rendering
  if(global.plrHand.length === 2 && global.plrHand[0].rank === global.plrHand[1].rank && !global.stand) {
    split =
      <div className={classes.ButtonDiv}>
        <button className={classes.Split} onClick={global.split} />
        <h4>Split</h4>
      </div>
  }

  // Next conditional rendering
  if(global.stand || global.busted) {
    next = 
      <div className={classes.ButtonDiv}>
        <button className={classes.Next} onClick={props.initRound} />
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