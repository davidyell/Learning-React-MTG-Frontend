import React from 'react'

interface Props {
  power: string
  toughness: string
}

const Stats = (props: Props): JSX.Element => {
  return <span className="card-stats">{props.power}/{props.toughness}</span>
}
export default Stats
