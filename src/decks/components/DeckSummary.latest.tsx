import { DeckListItem } from '../../types/decks.type'
import { Typography } from 'antd'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { Link } from 'react-router-dom'
import DeckLastUpdated from './LastUpdated'
import './deckSummary.latest.scss'

dayjs.extend(relativeTime);
const { Title, Paragraph } = Typography

type Props = {
  deckItem: DeckListItem;
}

const DeckSummaryRow = (props: Props) => {
  return (
    <div className="deck-summary">
      <Link to={'/deck/' + props.deckItem.deck.id} title={props.deckItem.deck.name}>
        <Title level={4}>{props.deckItem.deck.name}</Title>
        <Paragraph>A {props.deckItem.meta.card_count} card deck created by {props.deckItem.player.first_name} {props.deckItem.player.last_name}</Paragraph>
      </Link>
      <DeckLastUpdated updated={props.deckItem.deck.updated} />
    </div>
  )
}

export default DeckSummaryRow
