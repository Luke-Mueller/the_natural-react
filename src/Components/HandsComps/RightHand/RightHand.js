import React from 'react';

import classes from './RightHand.module.css';

import Card from '../Card/Card';

const RightHand = props => {

  const cards = props.rightHand.map(card => {
    const key = `${card.id}${card.deck}`
    return (
      <Card 
        id={card.id} 
        key={key} 
        style={{
          marginLeft: props.rightHand.indexOf(card) * 50 + 'px',
          marginTop: '-115px'
        }}/>
    )
  })

  return (
    <ul className={classes.RightHand}>
      {cards}
    </ul>
  )
}

export default RightHand;