import Axios from 'axios'
import type { DeckList, ViewDeck } from '../../types/decks.type';

const getDeck = async (deckId: number): Promise<ViewDeck> => {
  return await Axios.get<ViewDeck>(`${process.env.API_URL}/api/decks/${deckId}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    })
}

const getAllDecks = async (): Promise<DeckList> => {
  return await Axios.get<DeckList>(`${process.env.API_URL}/api/decks`)
    .then((response) => {
      const decksData = response.data;
      decksData.data.sort((a, b) => a.deck.updated > b.deck.updated ? -1 : 1);
      return decksData;
    })
    .catch((error) => {
      throw error;
    })
}

export { getDeck, getAllDecks }
