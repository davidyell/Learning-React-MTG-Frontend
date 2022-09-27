import React from 'react'
import { DeckListItem } from '../types/decks.type'
import { Typography } from 'antd'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import './deckSummary.scss'

dayjs.extend(relativeTime);
const { Title, Paragraph } = Typography

type Props = {
  deckItem: DeckListItem;
}

const DeckSummary = (props: Props) => {
  return (
    <div className="deck-summary">
      <Title level={4}>{props.deckItem.deck.name}</Title>
      <Paragraph>A {props.deckItem.meta.card_count} card deck created by {props.deckItem.player.first_name} {props.deckItem.player.last_name}</Paragraph>
      <Paragraph className="last-updated" type='secondary'>Last updated {dayjs(props.deckItem.deck.updated).fromNow()}</Paragraph>
    </div>
  )
}

export default DeckSummary
