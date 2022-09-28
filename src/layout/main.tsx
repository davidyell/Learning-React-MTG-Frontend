import React from 'react'
import { Layout, Menu } from 'antd'
import MainFooter from './footer'
import { useNavigate } from "react-router-dom";

import 'antd/dist/antd.css'
import 'mana-font/css/mana.min.css'
import './main.scss'
import { Outlet, Router } from 'react-router-dom'

const { Header, Content } = Layout;

const MainLayout = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <Header>
        <div className="logo">MTDDBA</div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['home']}
          items={[
            { key: 'home', label: 'Home', onClick: () => navigate('/') },
            { key: 'list-decks', label: 'Decks', onClick: () => navigate('/decks') },
          ]}
        />
      </Header>
      <Content style={{ padding: '20px 50px' }}>
        <Outlet />
      </Content>
      <MainFooter />
    </Layout >
  )
}

export default MainLayout;
