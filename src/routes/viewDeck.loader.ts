import getDeck from '../decks/getDeck'

export async function loader(args: any) {
  const deckId = parseInt(args.params.deckId, 10);
  return getDeck(deckId);
}
