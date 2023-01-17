import Axios from 'axios'
import { CardColorIdentity } from '../../card/card.meta';
import type { CardsInDeck, DeckList, ViewDeck } from '../../types/decks.type';

const getDeck = async (deckId: number): Promise<ViewDeck> => {
  return await Axios.get<ViewDeck>('http://localhost:3001/api/decks/' + deckId)
    .then((response) => {
      // Normalize the color identity into an array of strings, with the types
      response.data.data.cards_in_deck.forEach((value: CardsInDeck, index: number, array: CardsInDeck[]) => { value.meta.parsedColors = value.card.color_identity.split(',') as CardColorIdentity[] });

      return response.data;
    })
    .catch((error) => {
      throw error;
    })
}

const getAllDecks = async (): Promise<DeckList> => {
  return await Axios.get<DeckList>('http://localhost:3001/api/decks')
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
