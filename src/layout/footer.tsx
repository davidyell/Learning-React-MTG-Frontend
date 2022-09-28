import React from 'react'
import { Layout, Typography } from 'antd'

const { Footer } = Layout;
const { Paragraph } = Typography;

const MainFooter = () => {
  return (
    <Footer style={{ textAlign: 'center' }}>
      <Paragraph><i className="ms ms-u"></i> <i className="ms ms-w"></i> <i className="ms ms-g"></i> <i className="ms ms-b"></i> <i className="ms ms-r"></i></Paragraph>
      <Paragraph>A deck building app to learn React with Typescript.</Paragraph>
      <Paragraph>Created by David Yell &middot; <a href="https://github.com/davidyell/Learning-React-MTG-Frontend" title="View the repo on Github">Github</a></Paragraph>
      <small>Not affiliated or endorsed by Wizards of the Coast or Magic the Gathering.</small>
    </Footer>
  )
}

export default MainFooter;
