type Props = {
  power: string;
  toughness: string;
}

const Stats = (props: Props) => {
  return <span className="card-stats">{props.power}/{props.toughness}</span>
}
export default Stats
