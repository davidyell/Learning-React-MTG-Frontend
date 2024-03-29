export interface DeckList {
  data: DeckListItem[]
}

export interface Deck {
  id: number
  name: string
  updated: Date
}

export interface Player {
  id: number
  first_name: string
  last_name: string
  avatar: string
}

export interface DeckListItem {
  deck: Deck
  player: Player
  meta: {
    card_count: number
  }
}

export interface CardInDeck {
  id: number
  border_color: string
  color_identity: string
  color_indicator: string
  colors: string
  converted_mana_cost: number
  flavor_name: string
  flavor_text: string
  keywords: string
  layout: string
  mana_cost: string
  mana_value: number
  multiverseId: string
  name: string
  power: string
  rarity: string
  set_code: string
  subtypes: string
  supertypes: string
  text: string
  toughness: string
  type: string
  types: string
  uuid: string
}

export interface CardsInDeck {
  card: CardInDeck
  meta: {
    quantity: number
    is_sideboard: boolean
  }
}

export interface ViewDeck {
  data: {
    deck: Deck
    player: Player
    cards_in_deck: CardsInDeck[]
  }
}
