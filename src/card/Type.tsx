import Set from './Set'
import { CardRarity } from './card.meta'

type Props = {
  type: string;
  set: string;
  rarity: CardRarity;
}

const Type = (props: Props) => {
  return <div className="card-type">{props.type} <Set set={props.set} rarity={props.rarity}></Set></div>
}

export default Type;
