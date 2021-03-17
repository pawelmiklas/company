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
  UserOutlined,
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
  Tooltip,
  Typography,
} from "antd";
import DashboardPage from "pages/DashboardPage/DashboardPage";
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./LayoutPage.css";

interface Props {}

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

const LayoutPage = (props: Props) => {
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
            style={{ backgroundColor: "#3399ff" }}
          >
            <WechatOutlined style={{ fontSize: "24px" }} />
          </Badge>
          <Badge
            className="badge"
            count={3}
            style={{ backgroundColor: "#3399ff" }}
          >
            <BellOutlined style={{ fontSize: "24px" }} />
          </Badge>
        </div>
      </Header>
      <Layout style={{ height: "100vh", overflow: "auto" }}>
        <Sider style={{ padding: 16, width: 300 }}>
          <Card
            title={
              <div className="cardTitleWrapper">
                <Avatar size={64} icon={<UserOutlined />} />
                <Title
                  level={5}
                  style={{ margin: "8px 0 0 0", color: "#3399ff" }}
                >
                  Humberta Swift
                </Title>
                <Text type="secondary">Job title - Company</Text>
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
            <RadarChartOutlined style={{ fontSize: "32px", paddingRight: 8 }} />
            Ecosystem
          </div>
          <div className="siderItem">
            <HddOutlined style={{ fontSize: "32px", paddingRight: 8 }} />
            Entities
          </div>
        </Sider>
        <Content>
          <Switch>
            <Route path="/dashboard" component={DashboardPage} />
            <Route path="/entities" component={() => <div></div>} />
            <Route path="/publications" component={() => <div></div>} />
            <Redirect to="/dashboard" />
          </Switch>
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutPage;
