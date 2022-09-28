import React, { useEffect, useState } from 'react'
import { Button, Typography } from 'antd'
import type { DeckListItem } from '../../types/decks.type'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import DeckSummaryRow from './deckSummary.latest'
import { CaretRightOutlined } from '@ant-design/icons'
import { getAllDecks } from '../finders/deck.finders'

dayjs.extend(relativeTime);
const { Title } = Typography;

const LatestDecks = () => {
  const [decks, setDecks] = useState([] as DeckListItem[]);

  useEffect(() => {
    getAllDecks().then(result => setDecks(result.data))
  }, []);

  const recentDecks = decks.slice(0, 5).map((deckItem: DeckListItem) => {
    return <li key={deckItem.deck.id} style={{ listStyle: 'none', marginBottom: '8px' }}>
      <DeckSummaryRow deckItem={deckItem} />
    </li>
  });

  return (
    <>
      <Title level={2}>Latest decks</Title>
      <ul>{recentDecks}</ul>
      <Button type='primary' title="See more decks" style={{ float: 'right' }} href='/decks'>View all decks <CaretRightOutlined /></Button>
    </>
  )
}

export default LatestDecks;
