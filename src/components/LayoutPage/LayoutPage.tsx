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
  Card,
  Col,
  Dropdown,
  Input,
  Layout,
  Menu,
  Row,
  Typography,
} from "antd";
import { usePhotos } from "api/usePhotos";
import { useUsers } from "api/useUsers";
import React, { FC, ReactNode, useEffect } from "react";
import { Link } from "react-router-dom";
import { useStore } from "store/store";
import { matchPhoto } from "utils/collectionMatches";
import { colors } from "utils/theme";
import CardSiderItem from "./components/CardSiderItem/CardSiderItem";
import PageListItem from "./components/PageListItem/PageListItem";
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
  const { data: photosData } = usePhotos({ from: 0, limit: 60 });
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
        <Row style={{ width: "100%" }}>
          <Col span={1}>
            <Link to="/dashboard">
              <div className="LogoWrapper">
                <MediumOutlined style={{ fontSize: "24px", color: "black" }} />
              </div>
            </Link>
          </Col>
          <Col span={5}>
            <Dropdown overlay={menu} trigger={["click"]}>
              <span onClick={(e) => e.preventDefault()}>
                Home <DownOutlined />
              </span>
            </Dropdown>
          </Col>
          <Col span={12}>
            <Input
              placeholder="Search legal cluster"
              suffix={<SearchOutlined />}
            />
          </Col>
          <Col span={6} className="badgeWrapper">
            <Link to="/dashboard">
              <Badge className="badge" count={0}>
                <HomeOutlined style={{ fontSize: "24px" }} />
              </Badge>
            </Link>
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
          </Col>
        </Row>
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
              <CardSiderItem
                to="/404"
                name="Your Network"
                buttonIcon={<UserAddOutlined />}
                icon={<UsergroupDeleteOutlined />}
              />
              <CardSiderItem
                to="/404"
                name="Your Publications"
                buttonIcon={<TableOutlined />}
                icon={<PlusOutlined />}
              />
            </Card>
            <PageListItem
              to="/404"
              icon={<FileTextOutlined />}
              name="Publications"
            />
            <PageListItem
              to="/404"
              icon={<RadarChartOutlined />}
              name="Ecosystem"
            />
            <PageListItem
              to="/entities"
              icon={<HddOutlined />}
              name="Entities"
            />
          </Sider>
          <Content>{children}</Content>
        </Layout>
      </main>
    </Layout>
  );
};

export default LayoutPage;
