import { Typography } from 'antd'

const { Paragraph } = Typography

const Body = () => {
  return <div className="card-body">
    <Paragraph><i className="ms ms-tap"></i>: Add <i className="ms ms-cost ms-g"></i></Paragraph>
    <hr />
    <Paragraph italic={true}>As patient and generous as life, as hard and merciless as nature.</Paragraph>
  </div>
}

export default Body;
