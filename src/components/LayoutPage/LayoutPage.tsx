import {
  BellOutlined,
  FileTextOutlined,
  HddOutlined,
  HomeOutlined,
  LogoutOutlined,
  MediumOutlined,
  PlusOutlined,
  RadarChartOutlined,
  SearchOutlined,
  TableOutlined,
  UserAddOutlined,
  UsergroupDeleteOutlined,
  UnorderedListOutlined,
  WechatOutlined,
  SettingOutlined,
  EditOutlined,
  BookOutlined,
  ReadOutlined,
  TeamOutlined,
  ContainerOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Badge,
  Card,
  Col,
  Divider,
  Input,
  Layout,
  Row,
  Select,
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
const { Option, OptGroup } = Select;

const menuOptions = [
  {
    group: "Platform",
    items: [
      { name: "Home", icon: <HomeOutlined className="iconSpacingToText" /> },
      {
        name: "Publications",
        icon: <UnorderedListOutlined className="iconSpacingToText" />,
      },
      { name: "People", icon: <TeamOutlined className="iconSpacingToText" /> },
      {
        name: "Entities",
        icon: <ContainerOutlined className="iconSpacingToText" />,
      },
      {
        name: "Administration",
        icon: <TeamOutlined className="iconSpacingToText" />,
      },
    ],
  },
  {
    group: "Workspaces",
    items: [
      {
        name: "Client contract",
        icon: <EditOutlined className="iconSpacingToText" />,
      },
      {
        name: "Supplier contract",
        icon: <EditOutlined className="iconSpacingToText" />,
      },
      {
        name: "Corporate",
        icon: <ReadOutlined className="iconSpacingToText" />,
      },
      {
        name: "Group Norms",
        icon: <BookOutlined className="iconSpacingToText" />,
      },
      {
        name: "Real estate contracts",
        icon: <EditOutlined className="iconSpacingToText" />,
      },
    ],
  },
];

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
          <Col span={7}>
            <Select
              defaultValue="Corporate"
              style={{ width: "60%" }}
              onChange={() => {}}
              dropdownRender={(menu) => (
                <div>
                  <Input
                    placeholder="Filter..."
                    value=""
                    onChange={() => {}}
                    style={{ margin: 8, width: "94%" }}
                  />
                  <Divider style={{ margin: "4px 0" }} />
                  {menu}
                  <Divider style={{ margin: "4px 0" }} />
                  <Text type="secondary" style={{ paddingLeft: 8 }}>
                    Account
                  </Text>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "4px 24px",
                    }}
                  >
                    <Avatar
                      size={32}
                      style={{ marginRight: 8 }}
                      src={matchPhoto(photos, users[0].id)?.thumbnailUrl}
                    />
                    <Col>
                      <Title level={5} style={{ marginBottom: 0 }}>
                        {users[0].name || ""}
                      </Title>
                      <Text
                        type="secondary"
                        style={{ color: colors.primary, marginBottom: 0 }}
                      >
                        See profile
                      </Text>
                    </Col>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "4px 24px",
                    }}
                  >
                    <SettingOutlined className="iconSpacingToText" />
                    Privacy
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "4px 24px",
                    }}
                  >
                    <SettingOutlined className="iconSpacingToText" />
                    Settings
                  </div>
                  <Divider style={{ margin: "4px 0" }} />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "4px 24px",
                    }}
                  >
                    <LogoutOutlined className="iconSpacingToText" />
                    Logout
                  </div>
                </div>
              )}
            >
              {menuOptions.map((options) => (
                <OptGroup label={options.group}>
                  {options.items.map(({ name, icon }) => (
                    <Option value={name}>
                      {icon}
                      {name}
                    </Option>
                  ))}
                </OptGroup>
              ))}
            </Select>
          </Col>
          <Col span={10}>
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
