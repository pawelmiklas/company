import { UserOutlined } from "@ant-design/icons";
import { Card, Col, Image, List, Row, Typography } from "antd";
import IconText from "components/IconText/IconText";
import React from "react";

const listData: {
  href: string;
  title: string;
  avatar: string;
  description: string;
  content: string;
}[] = [];

for (let i = 0; i < 3; i++) {
  listData.push({
    href: "https://ant.design",
    title: `ant design part ${i}`,
    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    description:
      "Ant Design, a design language for background applications, is refined by Ant UED Team.",
    content:
      "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
  });
}

const { Text, Title } = Typography;

const Publications = () => {
  return (
    <Row>
      <Col span={8}>
        <Image
          style={{ height: 354 }}
          preview={false}
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        />
      </Col>
      <Col span={16}>
        <Card
          style={{
            maxHeight: 354,
            height: "100%",
          }}
        >
          <List
            itemLayout="vertical"
            size="small"
            dataSource={listData}
            renderItem={(item) => (
              <List.Item actions={[]}>
                <List.Item.Meta
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: 0,
                  }}
                  avatar={
                    <img
                      width={90}
                      alt="logo"
                      src="https://via.placeholder.com/150/f66b97"
                    />
                  }
                  title={
                    <div>
                      <Title level={5}>{item.description}</Title>
                      <Text type="secondary" style={{ marginRight: 8 }}>
                        7 jan 2020
                      </Text>
                      <IconText icon={UserOutlined} text="John Doe" />
                    </div>
                  }
                />
              </List.Item>
            )}
          />
        </Card>
      </Col>
    </Row>
  );
};

export default Publications;
