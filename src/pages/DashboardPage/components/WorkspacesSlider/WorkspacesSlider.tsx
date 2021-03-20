import { FileTextOutlined, UserOutlined } from "@ant-design/icons";
import Carousel, { slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { Card, Row, Typography } from "antd";
import IconText from "components/IconText/IconText";
import React from "react";
import "./WorkspacesSlidet.css";

const { Meta } = Card;
const { Text, Title } = Typography;

const items = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

const WorkspacesSlider = () => {
  return (
    <div className="workspaceSliderWrapper">
      <Row justify="space-between">
        <Title level={4}>Workspaces</Title>
      </Row>
      <Carousel
        plugins={[
          "infinite",
          "fastSwipe",
          {
            resolve: slidesToShowPlugin,
            options: {
              numberOfSlides: 3,
            },
          },
        ]}
        itemWidth={320}
        offset={8}
      >
        {items.map(() => (
          <Card
            key={`${new Date().getTime()}`}
            style={{ width: 320, height: 240 }}
            cover={
              <img
                alt="example"
                style={{ width: 320, height: 110 }}
                src="https://via.placeholder.com/300/92c952"
              />
            }
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column",
                height: "100%",
              }}
            >
              <img
                alt="example"
                style={{
                  width: 105,
                  height: 105,
                  position: "absolute",
                  top: "-35%",
                }}
                src="https://via.placeholder.com/150/771796"
              />
              <Meta title="Europe Street beat" style={{ marginLeft: 125 }} />
              <div>
                <IconText icon={<FileTextOutlined />} text="Contract" />
                <IconText icon={<UserOutlined />} text="150 users" />
                <Text type="secondary">
                  <IconText text="Last update 3 days ago" />
                </Text>
              </div>
            </div>
          </Card>
        ))}
      </Carousel>
    </div>
  );
};

export default WorkspacesSlider;
