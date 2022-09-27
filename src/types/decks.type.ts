export type DeckListItem = {
  deck: {
    id: number;
    name: string;
    updated: Date;
  },
  player: {
    id: number;
    first_name: string;
    last_name: string;
    avatar: string;
  },
  meta: {
    card_count: number;
  }
}
