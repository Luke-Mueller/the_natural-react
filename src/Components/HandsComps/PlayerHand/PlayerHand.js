import React from 'react';

import classes from './PlayerHand.module.css'

import Card from '../Card/Card';

const PlayerHand = props => {
  let cards;
  if(props.doubled) {
    // eslint-disable-next-line
    cards = props.plrHand.map(card => {
      const key = `${card.id}${card.deck}`;
      if(props.plrHand.indexOf(card) !== 2) {
        console.log('cardindex !2: ', props.plrHand.indexOf(card))
        return (
          <Card 
            id={card.id} 
            key={key} 
            style={{
              marginLeft: props.plrHand.indexOf(card) * 50 + 'px',
              marginTop: '-115px'
            }} />
        )
      } else if(props.plrHand.indexOf(card) === 2) {
        console.log('cardindex = 2: ', props.plrHand.indexOf(card))
        return (
          <Card 
            id={card.id} 
            key={key} 
            style={{
              transform: 'rotate(90deg) translateX(-25px)',
              marginLeft: props.plrHand.indexOf(card) * 75 + 'px',
            }} />
        )
      }
    })
  } else {
    cards = props.plrHand.map(card => {
      const key = `${card.id}${card.deck}`;
      return (
        <Card 
          id={card.id} 
          key={key} 
          style={{
            marginLeft: props.plrHand.indexOf(card) * 50 + 'px',
            marginTop: '-115px'
          }} />
      )
    })
  }

  return (
    <ul className={classes.PlayerHand}>
      {cards}
    </ul>
  )
}

export default PlayerHand;