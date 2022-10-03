import Set from './Set'

type Props = {
  type: string;
  set: string;
  rarity: string;
}

const Type = (props: Props) => {
  return <div className="card-type">{props.type} <Set set={props.set} rarity={props.rarity}></Set></div>
}

export default Type;
