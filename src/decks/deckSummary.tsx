import { DeckListItem } from '../types/decks.type'
import { Typography, Tooltip } from 'antd'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { Link } from 'react-router-dom'
import './deckSummary.scss'

dayjs.extend(relativeTime);
const { Title, Paragraph } = Typography

type Props = {
  deckItem: DeckListItem;
}

const DeckSummary = (props: Props) => {
  return (
    <div className="deck-summary">
      <Link to={'/deck/' + props.deckItem.deck.id} title={props.deckItem.deck.name}>
        <Title level={4}>{props.deckItem.deck.name}</Title>
        <Paragraph>A {props.deckItem.meta.card_count} card deck created by {props.deckItem.player.first_name} {props.deckItem.player.last_name}</Paragraph>
      </Link>
      <Paragraph className="last-updated" type='secondary'>
        <Tooltip title={dayjs(props.deckItem.deck.updated).format('ddd, MMM D, YYYY h:mm A')} mouseEnterDelay={0.5}>
          Last updated {dayjs(props.deckItem.deck.updated).fromNow()}
        </Tooltip>
      </Paragraph>
    </div>
  )
}

export default DeckSummary
