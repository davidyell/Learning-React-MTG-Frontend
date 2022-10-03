import { Layout } from 'antd'
import MainFooter from './Footer'
import { Outlet } from 'react-router-dom'
import Navigation from './Navigation'

import 'antd/dist/antd.css'
import 'mana-font/css/mana.min.css'
import './main.scss'


const { Header, Content } = Layout;

const MainLayout = () => {
  return (
    <Layout>
      <Header>
        <div className="logo">MTGDBA</div>
        <Navigation />
      </Header>
      <Content style={{ padding: '20px 50px' }}>
        <Outlet />
      </Content>
      <MainFooter />
    </Layout >
  )
}

export default MainLayout;
