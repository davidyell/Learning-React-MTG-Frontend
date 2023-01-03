export type Thingy = Record<CardColorIdentity, string>

export const CardColor = {
  R: 'Red',
  W: 'White',
  G: 'Green',
  B: 'Black',
  U: 'Blue',
} as const

export type CardColorIdentity = keyof typeof CardColor

export enum CardRarity {
  common = 'common',
  uncommon = 'uncommon',
  rare = 'rare',
  mythic = 'mythic',
  special = 'special',
  bonus = 'bonus'
}
