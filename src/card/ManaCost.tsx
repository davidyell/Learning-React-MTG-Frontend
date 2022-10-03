import 'mana-font/css/mana.min.css'

type Props = {
  manaCost: string;
}

const ManaCost = (props: Props) => {
  let symbols;
  if (props.manaCost) {
    const cleanCost = props.manaCost.replace(/[{}]+/g, '').split('');
    symbols = cleanCost.map((symbol) => <i className={`ms ms-cost ms-${symbol.toLowerCase()}`}></i>)
  }

  return (
    <span className="mana-cost">{symbols}</span>
  )
}

export default ManaCost;
