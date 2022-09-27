import React, { useEffect, useState } from 'react'
import { Typography } from 'antd'
import Axios from 'axios'
import type { DeckListItem } from '../types/decks.type'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import DeckSummary from './deckSummary'

dayjs.extend(relativeTime);
const { Title } = Typography;

const LatestDecks = () => {
  const [decks, setDecks] = useState([] as DeckListItem[]);

  useEffect(() => {
    const url = 'http://localhost:3001/api/decks';

    Axios.get<{ data: DeckListItem[] }>(url)
      .then((response) => {
        setDecks(response.data.data)
      });
  }, []);

  const recentDecks = decks.map((deckItem: DeckListItem) => {
    return <li key={deckItem.deck.id} style={{ listStyle: 'none', marginBottom: '8px' }}>
      <DeckSummary deckItem={deckItem} />
    </li>
  });

  return (
    <>
      <Title level={2}>Latest decks</Title>
      <ul>{recentDecks}</ul>
    </>
  )
}

export default LatestDecks;
