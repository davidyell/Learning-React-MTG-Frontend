import { getDeck } from '../decks/finders/deck.finders'

export async function loader(args: any) {
  const deckId = parseInt(args.params.deckId, 10);
  return getDeck(deckId);
}
