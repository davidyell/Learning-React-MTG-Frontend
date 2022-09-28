import Axios from 'axios'
import type { ViewDeck } from '../types/decks.type';

const getDeck = async (deckId: number): Promise<ViewDeck> => {
  return await Axios.get('http://localhost:3001/api/decks/' + deckId)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    })
}

export default getDeck
