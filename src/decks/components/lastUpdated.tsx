import { Typography, Tooltip } from 'antd'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

const { Paragraph } = Typography
dayjs.extend(relativeTime);

type Props = {
  updated: Date;
}

const DeckLastUpdated = (props: Props) => {
  return (
    <Paragraph className="last-updated" type='secondary'>
      <Tooltip title={dayjs(props.updated).format('ddd, MMM D, YYYY h:mm A')} mouseEnterDelay={0.5}>
        Last updated {dayjs(props.updated).fromNow()}
      </Tooltip>
    </Paragraph>
  )
}

export default DeckLastUpdated
