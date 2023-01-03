import type { CardRarity } from './card.meta'

import 'keyrune/css/keyrune.min.css'

type Props = {
  set: string;
  rarity: CardRarity;
}

const Set = (props: Props) => {
  return <span className={`card-set ${props.rarity}`}>
    <i className={`ss ss-${props.set.toLowerCase()}`}></i>
  </span>
}

export default Set;
