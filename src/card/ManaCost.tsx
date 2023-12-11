import React from 'react'

import 'mana-font/css/mana.min.css'

interface Props {
  manaCost: string
}

const ManaCost = (props: Props): JSX.Element => {
  let symbols
  if (props.manaCost !== '') {
    const cleanCost = props.manaCost.replace(/[{}]+/g, '').split('')
    symbols = cleanCost.map((symbol, i) => <i className={`ms ms-cost ms-${symbol.toLowerCase()}`} key={i}></i>)
  }

  return (
    <span className="mana-cost">{symbols}</span>
  )
}

export default ManaCost
