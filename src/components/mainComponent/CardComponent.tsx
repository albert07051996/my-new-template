import React from 'react';
import { Card, Col, Row } from 'antd';
import pic from '../../assets/images/snowy-road-picture-3wlwtu7z46vbv7k2.jpg'
const { Meta } = Card;

export const CardComponent = () => (
  <div>
    <Row gutter={16}>
      <Col xs={18}
        sm={14}
        md={14}
        lg={14}
        xl={12}
        xxl={6}>

        <Card
          hoverable
          style={{ minWidth: "300px", }}

          cover={<img alt="example" src={pic}
           height={"300px"}
            // width={"300px"}
           />}
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
      </Col>
      {/* <Col xs={18}
        sm={14}
        md={14}
        lg={14}
        xl={12}
        xxl={6}>

        <Card
          hoverable
          style={{ minWidth: "300px", }}

          cover={<img alt="example" src={pic} height={"300px"} />}
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
      </Col>
      <Col xs={18}
        sm={14}
        md={14}
        lg={14}
        xl={12}
        xxl={6}>

        <Card
          hoverable
          style={{ minWidth: "300px", }}
          cover={<img alt="example" src={pic} height={"300px"} min-width={"300px"}/>}
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
      </Col>
      <Col xs={18}
        sm={14}
        md={14}
        lg={14}
        xl={12}
        xxl={6}>

        <Card
          hoverable
          style={{ minWidth: "300px", }}

          cover={<img alt="example" src={pic} height={"300px"} />}
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
      </Col> */}
    </Row>

  </div>
);

