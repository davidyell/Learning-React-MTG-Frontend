import { Avatar } from 'antd'
import type { Player } from '../../types/decks.type'

import './userAvatar.scss'

type Props = {
  player: Player
}

const colors = ['red', 'green', 'blue', 'black', 'white']

const UserAvatar = (props: Props) => {
  const playerAvatarImage = props.player.avatar
  const playerName = props.player.first_name + ' ' + props.player.last_name

  let playerFace;
  if (playerAvatarImage !== null) {
    playerFace = <Avatar size='small' src={'http://localhost:3001/user-avatars/' + props.player.avatar} alt={playerName} />
  } else {
    const color = colors[Math.floor(Math.random() * colors.length)];
    playerFace = <Avatar size='small' className={color}>{playerName.charAt(0)}</Avatar>
  }

  return playerFace
}

export default UserAvatar
