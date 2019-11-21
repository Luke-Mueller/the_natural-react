import React from 'react';

import classes from './DealerHand.module.css'

import Card from '../Card/Card'

const DealerHand = props => {
  let cards;
  if(props.dlrHand.length === 2 && !props.stand && !props.busted) {
    // eslint-disable-next-line
    cards = props.dlrHand.map(card => {
      if(props.dlrHand.indexOf(card) === 0) {
        const key = `${card.id}${card.deck}`
        return (
          <Card id='back' key={key} />
        )
      }
      if(props.dlrHand.indexOf(card) === 1) {
        const key = `${card.id}${card.deck}`
        return (
          <Card id={card.id} key={key} />
        )
      }
    })
  } else {
    cards = props.dlrHand.map(card => {
      const key = `${card.id}${card.deck}`
      return (
        <Card id={card.id} key={key} />
      )
    })
  }

  return (
    <ul className={classes.DealerHand} >
      {cards}
    </ul>
  )
}

export default DealerHand;