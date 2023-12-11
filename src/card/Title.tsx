import ManaCost from './ManaCost'
import React from 'react'

interface Props {
  title: string
  manaCost?: string
}

const Title = (props: Props): JSX.Element => {
  return (
    <div className='card-title'>{props.title} {(props.manaCost !== undefined) && <ManaCost manaCost={props.manaCost}></ManaCost>}</div>
  )
}

export default Title
