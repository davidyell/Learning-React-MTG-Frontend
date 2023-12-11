import React from 'react'

import 'keyrune/css/keyrune.min.css'

interface Props {
  set: string
  rarity: string
}

const Set = (props: Props): JSX.Element => {
  return <span className={`card-set ${props.rarity}`}>
    <i className={`ss ss-${props.set.toLowerCase()}`}></i>
  </span>
}

export default Set
