import React from 'react';

import classes from './PlayerHand.module.css'

import Card from '../Card/Card';

const PlayerHand = props => {

  const cards = props.plrHand.map(card => {
    const key = `${card.id}${card.deck}`
    return (
      <Card 
        id={card.id} 
        key={key} 
        style={{
          marginLeft: props.plrHand.indexOf(card) * 50 + 'px',
          marginTop: '-115px'
        }}/>
    )
  })

  return (
    <ul className={classes.PlayerHand}>
      {cards}
    </ul>
  )
}

export default PlayerHand;