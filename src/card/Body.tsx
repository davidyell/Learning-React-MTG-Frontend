import { Typography } from 'antd'
import reactStringReplace from 'react-string-replace'
import React from 'react'

const { Paragraph } = Typography

interface Props {
  text: string
  flavorName: string
  flavorText: string
}

const Body = (props: Props): JSX.Element => {
  let bodyText

  bodyText = reactStringReplace(props.text, '{T}', (match, i) => (
    <i className="ms ms-tap" key={Math.random()}></i>
  ))
  bodyText = reactStringReplace(bodyText, /{([\d\w])}/gm, (match, i) => (
    <i className={`ms ms-cost ms-${match.toLowerCase()}`} key={Math.random()}></i>
  ))

  return <div className="card-body">
    <p>{bodyText}</p>
    {(props.flavorText !== '') && <><hr /><Paragraph italic={true}>{props.flavorText}</Paragraph></>}
  </div>
}

export default Body
