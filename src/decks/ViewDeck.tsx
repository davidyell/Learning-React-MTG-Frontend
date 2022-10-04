import { useLoaderData } from 'react-router-dom'
import type { ViewDeck as ViewDeckType } from '../types/decks.type'
import Card from '../card/Card'
import { Typography } from 'antd'
import UserAvatar from './components/UserAvatar'

import './viewDeck.scss'

const { Title, Paragraph } = Typography

const ViewDeck = (props: any) => {
  const response = useLoaderData() as ViewDeckType;

  // TODO: Organise cards into a deck and create cards for each quantity and the sidebar
  const cards = response.data.cards_in_deck.map((cardInDeck) => <Card card={cardInDeck.card} key={cardInDeck.card.id}></Card>);

  return (
    <>
      <Title level={2}>{response.data.deck.name}</Title>
      <Paragraph>Created by, <UserAvatar player={response.data.player}></UserAvatar> {response.data.player.first_name} {response.data.player.last_name}</Paragraph>

      {cards}
    </>
  )
}

export default ViewDeck
