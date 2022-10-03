import Title from './Title'
import Image from './Image'
import Type from './Type'
import Body from './Body'
import Stats from './Stats'

import './card.scss'

const Card = () => {
  return <div id="card-0001" className='mtg-card green'>
    <Title></Title>
    <Image></Image>
    <Type></Type>
    <Body></Body>
    <Stats></Stats>
  </div>
}

export default Card;
