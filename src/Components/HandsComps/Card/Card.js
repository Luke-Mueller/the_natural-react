import React from 'react';

import classes from './Card.module.css';

const Card = props => {

  return (
      <li className={classes.Card} style={props.style}>
        <img src={`../../Assets/deck/${props.id}.png`} alt='playing card' />
      </li>
  )
}

export default Card;