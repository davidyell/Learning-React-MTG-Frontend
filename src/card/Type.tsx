import Set from './Set'
import React from 'react'

interface Props {
  type: string
  set: string
  rarity: string
}

const Type = (props: Props): JSX.Element => {
  return <div className="card-type">{props.type} <Set set={props.set} rarity={props.rarity}></Set></div>
}

export default Type
