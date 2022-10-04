import 'keyrune/css/keyrune.min.css'

type Props = {
  set: string;
  rarity: string;
}

const Set = (props: Props) => {
  return <span className={`card-set ${props.rarity}`}>
    <i className={`ss ss-${props.set.toLowerCase()}`}></i>
  </span>
}

export default Set;
