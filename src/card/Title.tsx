import ManaCost from './ManaCost'

type Props = {
  title: string;
  manaCost?: string;
}

const Title = (props: Props) => {
  return (
    <div className='card-title'>{props.title} {props.manaCost && <ManaCost manaCost={props.manaCost}></ManaCost>}</div>
  )
}

export default Title;
