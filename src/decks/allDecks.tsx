import { useEffect, useState } from 'react'
import { DeckListItem } from '../types/decks.type'
import { getAllDecks } from './finders/deck.finders'
import DeckSummaryCard from './components/deckSummary.card'

import './allDecks.scss'

const AllDecks = () => {
  const [decks, setDecks] = useState([] as DeckListItem[])

  useEffect(() => {
    getAllDecks().then(result => setDecks(result.data))
  }, []);

  const deckCards = decks.map((deckItem) => <DeckSummaryCard deckListItem={deckItem} />)

  return (
    <div className='all-decks'>
      {deckCards}
    </div>
  )
}

export default AllDecks
