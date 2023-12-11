import Title from './Title'
import Image from './Image'
import Type from './Type'
import Body from './Body'
import Stats from './Stats'
import type { CardInDeck } from '../types/decks.type'
import colorToClass from './colorToClass.util'
import React from 'react'

import './card.scss'

interface Props {
  card: CardInDeck
}

const Card = (props: Props): JSX.Element => {
  return <div id={props.card.multiverseId} className={`mtg-card ${colorToClass(props.card.color_identity)}`} style={{ borderColor: props.card.border_color }}>
    <Title title={props.card.name} manaCost={props.card.mana_cost}></Title>
    <Image></Image>
    <Type type={props.card.type} set={props.card.set_code} rarity={props.card.rarity}></Type>
    <Body text={props.card.text} flavorName={props.card.flavor_name} flavorText={props.card.flavor_text}></Body>
    {((props.card.power !== '') && (props.card.toughness !== '')) && <Stats power={props.card.power} toughness={props.card.toughness}></Stats>}
  </div>
}

export default Card
