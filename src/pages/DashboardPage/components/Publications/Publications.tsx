import { Avatar, Col, List, Row, Typography } from "antd";
import { usePosts } from "api/usePosts";
import React from "react";
import { useStore } from "store/store";
import { matchPhoto, matchUser } from "utils/collectionMatches";
import { colors } from "utils/theme";

const { Text, Title } = Typography;

const Publications = () => {
  const { data } = usePosts({ limit: 4 });
  const { users, photos } = useStore();

  if (!data) {
    return null;
  }

  const [firstPost, ...restPosts] = data;

  return (
    <Row style={{ backgroundColor: colors.white }}>
      <Col span={8} style={{ position: "relative" }}>
        <img
          style={{ height: 320, width: "100%" }}
          src={matchPhoto(photos, firstPost.id)?.url}
          alt=""
        />
        <Col
          style={{
            position: "absolute",
            bottom: "2%",
            left: "4%",
          }}
        >
          <Title
            level={5}
            style={{
              color: colors.white,
            }}
          >
            {firstPost.title}
          </Title>
          <Text
            type="secondary"
            style={{
              marginRight: 8,
              color: colors.white,
            }}
          >
            7 jan 2020
          </Text>
          <Avatar
            size="small"
            src={matchPhoto(photos, firstPost.id)?.thumbnailUrl}
          />
          <Text
            type="secondary"
            style={{
              marginLeft: 8,
              color: colors.white,
            }}
          >
            {matchUser(users, firstPost.id)?.name}
          </Text>
        </Col>
      </Col>
      <Col span={16}>
        <List
          itemLayout="vertical"
          size="small"
          dataSource={restPosts}
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
                    src={matchPhoto(photos, item.id)?.url}
                  />
                }
                title={
                  <div>
                    <Title level={5}>{item.title}</Title>
                    <Text type="secondary" style={{ marginRight: 8 }}>
                      7 jan 2020
                    </Text>
                    <Avatar
                      size="small"
                      src={matchPhoto(photos, item.id)?.thumbnailUrl}
                    />
                    <Text type="secondary" style={{ marginLeft: 8 }}>
                      {matchUser(users, item.id)?.name}
                    </Text>
                  </div>
                }
              />
            </List.Item>
          )}
        />
      </Col>
    </Row>
  );
};

export default Publications;
