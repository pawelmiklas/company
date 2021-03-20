import { FileTextOutlined, UserOutlined } from "@ant-design/icons";
import Carousel, { slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { Card, Row, Typography } from "antd";
import IconText from "components/IconText/IconText";
import React, { useCallback } from "react";
import { useStore } from "store/store";
import { matchPhoto } from "utils/collectionMatches";
import "./WorkspacesSlider.css";

const { Meta } = Card;
const { Text, Title } = Typography;

const WorkspacesSlider = () => {
  const { users, photos } = useStore(useCallback((state) => state, []));

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
        {(users || []).map((item) => (
          <Card
            key={`${new Date().getTime()}`}
            style={{ width: 320, height: 240 }}
            cover={
              <img
                alt=""
                style={{ width: 320, height: 110 }}
                src={matchPhoto(photos, item.id + 10)?.url}
              />
            }
          >
            <div className="cardContentWrapper">
              <img
                alt=""
                className="cardContentImage"
                src={matchPhoto(photos, item.id)?.thumbnailUrl}
              />
              <Meta title={item.company.name} className="cardContentMeta" />
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
