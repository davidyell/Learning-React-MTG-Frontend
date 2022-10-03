import Title from './Title'
import Image from './Image'
import Type from './Type'
import Body from './Body'
import Stats from './Stats'
import type { CardInDeck } from '../types/decks.type'

import './card.scss'

type Props = {
  card: CardInDeck
}

const Card = (props: Props) => {
  let cardColorClassName;
  switch (props.card.color_identity) {
    case 'W':
      cardColorClassName = 'white'
      break
    case 'G':
      cardColorClassName = 'green'
      break
    case 'B':
      cardColorClassName = 'black'
      break
    case 'R':
      cardColorClassName = 'red'
      break
    case 'U':
      cardColorClassName = 'blue';
      break
    case null:
      cardColorClassName = 'artifact'
      break
    // TODO: What about multi-color cards like Steam Vents which is `R,U`, or `G,B`, etc
    case 'R,U':
      cardColorClassName = 'red-blue'
      break;
    default:
      cardColorClassName = 'unknown'
      break;
  }

  return <div id={props.card.multiverseId} className={`mtg-card ${cardColorClassName}`} style={{ borderColor: props.card.border_color }}>
    <Title title={props.card.name} manaCost={props.card.mana_cost}></Title>
    <Image></Image>
    <Type type={props.card.type} set={props.card.set_code} rarity={props.card.rarity}></Type>
    <Body text={props.card.text} flavorName={props.card.flavor_name} flavorText={props.card.flavor_text}></Body>
    {(props.card.power && props.card.toughness) && <Stats power={props.card.power} toughness={props.card.toughness}></Stats>}
  </div>
}

export default Card;
