import React, { useEffect, useState } from 'react'
import { Button, Typography } from 'antd'
import Axios from 'axios'
import type { DeckList, DeckListItem } from '../types/decks.type'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import DeckSummary from './deckSummary'
import { CaretRightOutlined } from '@ant-design/icons'

dayjs.extend(relativeTime);
const { Title } = Typography;

const LatestDecks = () => {
  const [decks, setDecks] = useState([] as DeckListItem[]);

  const getDecks = async () => {
    const url = 'http://localhost:3001/api/decks';

    Axios.get<DeckList>(url)
      .then((response) => {
        const decksData = response.data.data;
        decksData.sort((a, b) => a.deck.updated > b.deck.updated ? -1 : 1);
        setDecks(response.data.data)
      });
  }

  useEffect(() => {
    getDecks();
  }, []);

  const recentDecks = decks.slice(0, 5).map((deckItem: DeckListItem) => {
    return <li key={deckItem.deck.id} style={{ listStyle: 'none', marginBottom: '8px' }}>
      <DeckSummary deckItem={deckItem} />
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
