import {
  DownOutlined,
  RedEnvelopeOutlined,
  SearchOutlined,
  StarOutlined,
} from "@ant-design/icons";
import {
  Card,
  Col,
  Dropdown,
  Input,
  List,
  Menu,
  Pagination,
  Row,
  Space,
  Typography,
} from "antd";
import React, { FunctionComponent } from "react";
import "./ResumeList.css";

const data = [
  {
    title: "Title 1",
    description: "Qui anim ipsum proident sunt magna deserunt irure proident.",
    companyName: "companyName",
    companyType: "companyType",
    updatedAt: "updatedAt",
  },
  {
    title: "Title 2",
    description: "Proident enim aliqua dolor tempor minim cillum.",
    companyName: "companyName",
    companyType: "companyType",
    updatedAt: "updatedAt",
  },
  {
    title: "Title 3",
    description: "Officia qui aliqua est duis eiusmod.",
    companyName: "companyName",
    companyType: "companyType",
    updatedAt: "updatedAt",
  },
  {
    title: "Title 4",
    description: "Cupidatat aliqua est aliquip fugiat.",
    companyName: "companyName",
    companyType: "companyType",
    updatedAt: "updatedAt",
  },
  {
    title: "Title 5",
    description:
      "Labore qui cupidatat sint dolor cillum labore culpa fugiat velit reprehenderit irure esse laboris incididunt.",
    companyName: "companyName",
    companyType: "companyType",
    updatedAt: "updatedAt",
  },
  {
    title: "Title 6",
    description:
      "Ipsum sint culpa eiusmod ipsum pariatur occaecat ullamco mollit.",
    companyName: "companyName",
    companyType: "companyType",
    updatedAt: "updatedAt",
  },
];

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

type IconTextProps = {
  text: string;
  icon?: FunctionComponent<any>;
};

const IconText = ({ icon, text }: IconTextProps) => (
  <Space style={{ padding: "4px 12px 0 0" }}>
    {icon && React.createElement(icon)}
    {text}
  </Space>
);

const { Text, Title } = Typography;

interface Props {}

const ResumeList = (props: Props) => {
  return (
    <>
      <Row justify="space-between">
        <Col>
          <Title level={4}>Resume your work</Title>
        </Col>
        <Col>
          <div className="headingWrapper">
            <Input
              size="small"
              placeholder="Filter by title"
              suffix={<SearchOutlined />}
            />
            <Dropdown overlay={menu} trigger={["click"]} className="dropDown">
              <a onClick={(e) => e.preventDefault()}>
                Followed
                <DownOutlined />
              </a>
            </Dropdown>
          </div>
        </Col>
      </Row>
      <List
        grid={{
          gutter: 16,
          xl: 1,
          lg: 1,
          md: 1,
          sm: 1,
          xs: 1,
          xxl: 1,
        }}
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <Card>
              <Title level={5} style={{ color: "#3399ff" }}>
                {item.title}
              </Title>
              <div>{item.description}</div>
              <div>
                <IconText icon={StarOutlined} text={item.companyName} />
                <IconText icon={RedEnvelopeOutlined} text={item.companyType} />
                <Text type="secondary">
                  <IconText text={item.updatedAt} />
                </Text>
              </div>
            </Card>
          </List.Item>
        )}
      />
      <Row justify="center">
        <Col>
          <Pagination defaultCurrent={1} total={300} showSizeChanger={false} />
        </Col>
      </Row>
    </>
  );
};

export default ResumeList;
