import React from 'react';

import classes from './ChipsConsole.module.css'

const ChipsConsole = props => {
  return (
    <div className={classes.ChipsConsole}>
      <button className={classes.Five} onClick={props.addFive} />
      <button className={classes.TwentyFive} onClick={props.addTwentyFive} />
      <button className={classes.OneHundred} onClick={props.addOneHundred} />
      <button className={classes.FiveHundred} onClick={props.addFiveHundred} />
    </div>
  )
}

export default ChipsConsole;