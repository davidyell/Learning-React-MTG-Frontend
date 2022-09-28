import { useLocation, useNavigate } from "react-router-dom";
import { Menu } from 'antd'

const Navigation = () => {
  const navigate = useNavigate()
  const location = useLocation()
  console.log(location)

  const activeKey = (): string => {
    return location.pathname.includes('deck') ? 'decks' : 'home'
  }

  return (
    <Menu
      theme="dark"
      mode="horizontal"
      activeKey={activeKey()}
      selectedKeys={[activeKey()]}
      items={[
        { key: 'home', label: 'Home', onClick: () => navigate('/') },
        { key: 'decks', label: 'Decks', onClick: () => navigate('/decks') },
      ]}
    />
  )
}

export default Navigation;
