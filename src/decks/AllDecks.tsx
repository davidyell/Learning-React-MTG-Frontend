import React, { useEffect, useState } from 'react'
import { type DeckListItem } from '../types/decks.type'
import { getAllDecks } from './finders/deck.finders'
import DeckSummaryCard from './components/DeckSummary.card'

import './allDecks.scss'

const AllDecks = (): JSX.Element => {
  const [decks, setDecks] = useState([] as DeckListItem[])

  useEffect(() => {
    void getAllDecks().then(result => { setDecks(result.data) })
  }, [])

  const deckCards = decks.map((deckItem) => <DeckSummaryCard key={deckItem.deck.id} deckListItem={deckItem} />)

  return (
    <div className='all-decks'>
      {deckCards}
    </div>
  )
}

export default AllDecks
