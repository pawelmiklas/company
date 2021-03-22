import {
  BellOutlined,
  DownOutlined,
  FileTextOutlined,
  HddOutlined,
  HomeOutlined,
  MediumOutlined,
  PlusOutlined,
  RadarChartOutlined,
  SearchOutlined,
  TableOutlined,
  UserAddOutlined,
  UsergroupDeleteOutlined,
  WechatOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Badge,
  Button,
  Card,
  Dropdown,
  Input,
  Layout,
  Menu,
  Typography,
} from "antd";
import { usePhotos } from "api/usePhotos";
import { useUsers } from "api/useUsers";
import React, { FC, ReactNode, useEffect } from "react";
import { useStore } from "store/store";
import { matchPhoto } from "utils/collectionMatches";
import { colors } from "utils/theme";
import "./LayoutPage.css";

const { Header, Sider, Content } = Layout;
const { Text, Title } = Typography;

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="https://www.antgroup.com">1st menu item</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="https://www.aliyun.com">2nd menu item</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);

type LayoutPageProps = {
  children: ReactNode;
};

const LayoutPage: FC<LayoutPageProps> = ({ children }) => {
  const { data } = useUsers({});
  const { data: photosData } = usePhotos();
  const { setPhotos, setUsers, users, photos } = useStore();

  useEffect(() => {
    if (data) {
      setUsers(data);
    }
  }, [data, setUsers]);

  useEffect(() => {
    if (photosData) {
      setPhotos(photosData);
    }
  }, [photosData, setPhotos]);

  if (users.length === 0 || photos.length === 0) {
    return null;
  }

  return (
    <Layout style={{ height: "100vh", overflow: "auto" }}>
      <Header
        style={{
          backgroundColor: "white",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div className="LogoWrapper">
          <MediumOutlined style={{ fontSize: "24px" }} />
        </div>
        <div style={{ width: "15%" }}>
          <Dropdown overlay={menu} trigger={["click"]}>
            <a onClick={(e) => e.preventDefault()}>
              Home <DownOutlined />
            </a>
          </Dropdown>
        </div>
        <div style={{ width: "35%" }}>
          <Input
            placeholder="Search legal cluster"
            suffix={<SearchOutlined />}
          />
        </div>
        <div className="badgeWrapper">
          <Badge className="badge" count={0}>
            <HomeOutlined style={{ fontSize: "24px" }} />
          </Badge>
          <Badge
            className="badge"
            count={3}
            style={{ backgroundColor: colors.primary }}
          >
            <WechatOutlined style={{ fontSize: "24px" }} />
          </Badge>
          <Badge
            className="badge"
            count={3}
            style={{ backgroundColor: colors.primary }}
          >
            <BellOutlined style={{ fontSize: "24px" }} />
          </Badge>
        </div>
      </Header>
      <main style={{ display: "flex", justifyContent: "center" }}>
        <Layout style={{ height: "100vh", maxWidth: 1400 }}>
          <Sider style={{ padding: 16, width: 300 }}>
            <Card
              title={
                <div className="cardTitleWrapper">
                  <Avatar
                    size={64}
                    src={matchPhoto(photos, users[0].id)?.thumbnailUrl}
                  />
                  <Title
                    level={5}
                    style={{ margin: "8px 0 0 0", color: colors.primary }}
                  >
                    {users[0].name || ""}
                  </Title>
                  <Text type="secondary">{`${users[0].company.name}`}</Text>
                  <Text type="secondary">{`${users[0].address.city}`}</Text>
                </div>
              }
            >
              <div className="cardSiderItem">
                <UsergroupDeleteOutlined style={{ fontSize: "24px" }} />
                <p>Your Network</p>
                <Button icon={<UserAddOutlined />} />
              </div>
              <div className="cardSiderItem">
                <TableOutlined style={{ fontSize: "24px" }} />
                <p>Your Publications</p>
                <Button icon={<PlusOutlined />} />
              </div>
            </Card>
            <div className="siderItem" style={{ marginTop: 16 }}>
              <FileTextOutlined style={{ fontSize: "32px", paddingRight: 8 }} />
              Publications
            </div>
            <div className="siderItem">
              <RadarChartOutlined
                style={{ fontSize: "32px", paddingRight: 8 }}
              />
              Ecosystem
            </div>
            <div className="siderItem">
              <HddOutlined style={{ fontSize: "32px", paddingRight: 8 }} />
              Entities
            </div>
          </Sider>
          <Content>{children}</Content>
        </Layout>
      </main>
    </Layout>
  );
};

export default LayoutPage;
