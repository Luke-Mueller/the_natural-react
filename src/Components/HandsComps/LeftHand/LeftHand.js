import React from 'react';

import classes from './LeftHand.module.css';

import Card from '../Card/Card'

const LeftHand = props => {

  const cards = props.leftHand.map(card => {
    const key = `${card.id}${card.deck}`
    return (
      <Card 
        id={card.id} 
        key={key} 
        style={{
          marginLeft: props.leftHand.indexOf(card) * 50 + 'px',
          marginTop: '-115px'
        }}/>
    )
  })

  return (
    <ul className={classes.LeftHand}>
      {cards}
    </ul>
  )
}

export default LeftHand;