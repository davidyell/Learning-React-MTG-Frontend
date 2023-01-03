import type { CardRarity, CardColor } from '../card/card.meta'

export type DeckList = {
  data: DeckListItem[]
}

export type Deck = {
  id: number;
  name: string;
  updated: Date;
}

export type Player = {
  id: number;
  first_name: string;
  last_name: string;
  avatar: string;
}

export type DeckListItem = {
  deck: Deck,
  player: Player,
  meta: {
    card_count: number;
  }
}

export type CardInDeck = {
  id: number,
  border_color: string,
  color_identity: keyof typeof CardColor | string,
  color_indicator: string,
  colors: string,
  converted_mana_cost: number,
  flavor_name: string,
  flavor_text: string,
  keywords: string,
  layout: string,
  mana_cost: string,
  mana_value: number,
  multiverseId: string,
  name: string,
  power: string,
  rarity: CardRarity,
  set_code: string,
  subtypes: string,
  supertypes: string,
  text: string,
  toughness: string,
  type: string,
  types: string,
  uuid: string,
}

export type CardsInDeck = {
  card: CardInDeck,
  meta: {
    quantity: number,
    is_sideboard: boolean;
  }
}

export type ViewDeck = {
  data: {
    deck: Deck;
    player: Player;
    cards_in_deck: CardsInDeck[]
  }
}
