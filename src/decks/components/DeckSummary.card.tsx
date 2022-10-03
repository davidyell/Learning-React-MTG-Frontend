import type { DeckListItem } from '../../types/decks.type'
import { Card, Typography, Button } from 'antd'
import DeckLastUpdated from './LastUpdated'
import { Link } from 'react-router-dom'
import UserAvatar from './UserAvatar'

const { Paragraph } = Typography

type Props = {
  deckListItem: DeckListItem;
}

const DeckSummaryCard = (props: Props) => {
  const playerFace = <UserAvatar player={props.deckListItem.player} />

  return (
    <Card title={props.deckListItem.deck.name} extra={playerFace} className='deck-summary-card'>
      <Paragraph>Containing {props.deckListItem.meta.card_count} cards</Paragraph>
      <Link to={'/deck/' + props.deckListItem.deck.id} title={props.deckListItem.deck.name}>
        <Button type='primary' block={true}>View deck</Button>
      </Link>
      <DeckLastUpdated updated={props.deckListItem.deck.updated} />
    </Card>
  )
}

export default DeckSummaryCard
