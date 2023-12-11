import type { LoaderFunctionArgs } from 'react-router-dom'
import { getDeck } from '../decks/finders/deck.finders'
import type { ViewDeck } from '../types/decks.type'

export async function loader (args: LoaderFunctionArgs): Promise<ViewDeck> {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const deckId = parseInt(args.params.deckId!, 10)
  return await getDeck(deckId)
}
