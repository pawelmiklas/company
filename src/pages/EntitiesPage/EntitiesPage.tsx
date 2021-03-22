import { Card, Col, Row, Typography } from "antd";
import React from "react";
import "./EntitiesPage.css";

const { Title, Text } = Typography;

const EntitiesPage = () => {
  return (
    <div className="entitiesWrapper">
      <Row gutter={16}>
        <Col span={24}></Col>
      </Row>
      <Row>
        <Col span={6}>
          <Card bordered={false} style={{ width: "100%" }}>
            <Row gutter={16}>
              <Col>{/* <img alt="" /> */}</Col>
              <Col>
                <Title level={5}>test</Title>
                <Text>
                  Ullamco id ex dolore eu nisi consequat. Enim ea veniam irure
                  enim tempor et. Ea nulla ex fugiat voluptate id
                </Text>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default EntitiesPage;
