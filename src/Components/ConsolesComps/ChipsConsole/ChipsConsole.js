import React from 'react';

import classes from './ChipsConsole.module.css'

const ChipsConsole = props => {
  return (
    <div className={classes.ChipsConsole}>
      <button className={classes.White} onClick={props.addOne} />
      <button className={classes.Red} onClick={props.addFive} />
      <button className={classes.Blue} onClick={props.addTwentyFive} />
      <button className={classes.Black} onClick={props.addOneHundred} />
    </div>
  )
}

export default ChipsConsole;