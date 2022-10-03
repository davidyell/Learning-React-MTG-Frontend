import { Typography, Col, Row } from 'antd'
import LatestDecks from '../decks/components/LatestDecks'
import ContentBlock from './ContentBlock'

import 'antd/dist/antd.css'
import 'mana-font/css/mana.min.css'

const { Title } = Typography;

const Home = () => {
  return (
    <Row>
      <Col span={16}>
        <Title>A Deck Building App</Title>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in turpis lacinia, auctor eros in, placerat erat. In pellentesque neque metus, ut ullamcorper libero auctor vitae. Ut lorem nisl, porttitor eget dapibus at, pellentesque sit amet turpis. Donec sit amet iaculis massa. Vestibulum placerat ex vitae nibh rutrum, quis cursus leo porttitor. Sed et vehicula risus, vel pulvinar felis. Phasellus sollicitudin consectetur dui sit amet dapibus. Fusce ut vehicula lacus, id convallis lorem. Sed vitae mollis nisi. Nam aliquet elit sit amet nulla lobortis, eu venenatis lectus commodo.</p>

        <Row wrap={false} style={{ margin: '30px 0' }}>
          <Col style={{ textAlign: 'center' }}>
            <ContentBlock title="Learn to play Magic the Gathering" imageSrc="/img/playing-mtg.webp" imageWidth={350} imageHeight={200} p="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in turpis lacinia, auctor eros in, placerat erat. In pellentesque neque metus, ut ullamcorper libero auctor vitae." link="https://www.youtube.com/watch?v=RZyXU1L3JXk" linkText="Learn to play on YouTube"></ContentBlock>
          </Col>
          <Col style={{ textAlign: 'center' }}>
            <ContentBlock title="Learn about deck building" imageSrc="/img/header-image.jpeg" imageWidth={350} imageHeight={200} p="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in turpis lacinia, auctor eros in, placerat erat. In pellentesque neque metus, ut ullamcorper libero auctor vitae." link="https://www.youtube.com/watch?v=ncGvTC-Uun0" linkText="Build your first deck on YouTube"></ContentBlock>
          </Col>
        </Row>
      </Col>
      <Col flex={8}>
        <LatestDecks />
      </Col>
    </Row>
  )
}

export default Home;
