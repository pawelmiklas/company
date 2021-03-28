import {
  BellOutlined,
  ContainerOutlined,
  EditOutlined,
  FileTextOutlined,
  HddOutlined,
  HomeOutlined,
  LogoutOutlined,
  MediumOutlined,
  PlusOutlined,
  RadarChartOutlined,
  SearchOutlined,
  SettingOutlined,
  TableOutlined,
  TeamOutlined,
  UnorderedListOutlined,
  UserAddOutlined,
  UsergroupDeleteOutlined,
  WechatOutlined,
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
import React, {
  FC,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Link, useHistory } from "react-router-dom";
import { useStore } from "store/store";
import { matchPhoto } from "utils/collectionMatches";
import { colors } from "utils/theme";
import CardSiderItem from "./components/CardSiderItem/CardSiderItem";
import PageListItem from "./components/PageListItem/PageListItem";
import "./LayoutPage.css";

const { Header, Sider, Content } = Layout;
const { Text, Title } = Typography;
const { Option, OptGroup } = Select;

type MenuOptions = {
  group: string;
  items: {
    name: string;
    icon: JSX.Element;
    link: {
      pathname: string;
      state?: object;
    };
  }[];
}[];

const menuOptionsStatic: MenuOptions = [
  {
    group: "Platform",
    items: [
      {
        name: "Home",
        icon: <HomeOutlined className="iconSpacingToText" />,
        link: {
          pathname: "/",
        },
      },
      {
        name: "Publications",
        icon: <UnorderedListOutlined className="iconSpacingToText" />,
        link: {
          pathname: "/404",
        },
      },
      {
        name: "People",
        icon: <TeamOutlined className="iconSpacingToText" />,
        link: {
          pathname: "/404",
        },
      },
      {
        name: "Entities",
        icon: <ContainerOutlined className="iconSpacingToText" />,
        link: {
          pathname: "/entities",
        },
      },
      {
        name: "Administration",
        icon: <TeamOutlined className="iconSpacingToText" />,
        link: {
          pathname: "/404",
        },
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
  const { setPhotos, setUsers, users, photos } = useStore(
    useCallback((state) => state, [])
  );
  const history = useHistory();
  const [filter, setFilter] = useState("");

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

  const menuOptions = useMemo(
    () => [
      ...menuOptionsStatic,
      {
        group: "Workspaces",
        items: users.map((item) => ({
          name: item.company.name,
          icon: <EditOutlined className="iconSpacingToText" />,
          link: {
            pathname: `/workspace/${item.id}`,
            state: { title: item.company.name },
          },
        })),
      },
    ],
    [users]
  );

  const filteredMenuOptions = useMemo(
    () =>
      menuOptions.map(({ group, items }) => ({
        group,
        items: items.filter(({ name }) =>
          name.toLowerCase().includes(filter.toLowerCase())
        ),
      })),
    [filter, menuOptions]
  );

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
                    value={filter}
                    onChange={(e) => {
                      setFilter(e.target.value);
                    }}
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
                      <Link to="/profile">
                        <Text
                          type="secondary"
                          style={{ color: colors.primary, marginBottom: 0 }}
                        >
                          See profile
                        </Text>
                      </Link>
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
              {filteredMenuOptions.map((options) => (
                <OptGroup key={options.group} label={options.group}>
                  {options.items.map(({ name, link, icon }) => (
                    <Option
                      key={name}
                      value={name}
                      onMouseDown={() => {
                        history.push(link.pathname, link.state);
                      }}
                    >
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
                <Link to="/profile">
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
                </Link>
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
