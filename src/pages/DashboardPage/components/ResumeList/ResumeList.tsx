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
  Skeleton,
  Space,
  Typography,
} from "antd";
import { useComments } from "api/queries";
import useDebounce from "hooks/useDebounce";
import React, { FunctionComponent, useState } from "react";
import "./ResumeList.css";

const skeletonData = [...Array(10).keys()].map((item) => ({
  body: "",
  email: "",
  id: item,
  name: "",
  postId: item,
}));

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
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState("");
  const debouncedFilter = useDebounce(filter, 300);
  const { data, isLoading } = useComments({
    from: page,
    limit: 10,
    filter: debouncedFilter,
  });

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
              onChange={(e) => {
                setFilter(e.target.value || "");
              }}
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
        grid={{ gutter: 16, xl: 1, lg: 1, md: 1, sm: 1, xs: 1, xxl: 1 }}
        dataSource={data || skeletonData}
        renderItem={(item) => (
          <Skeleton loading={isLoading} paragraph={{ rows: 2 }}>
            <List.Item>
              <Card>
                <Title level={5} style={{ color: "#3399ff" }}>
                  {item.name}
                </Title>
                <div>{item.body}</div>
                <div>
                  <IconText icon={StarOutlined} text={item.email} />
                  <IconText icon={RedEnvelopeOutlined} text={item.email} />
                  <Text type="secondary">
                    <IconText text={item.email} />
                  </Text>
                </div>
              </Card>
            </List.Item>
          </Skeleton>
        )}
      />
      <Row justify="center">
        <Col>
          <Pagination
            defaultCurrent={page}
            total={300}
            showSizeChanger={false}
            onChange={(page) => {
              setPage(page);
            }}
          />
        </Col>
      </Row>
    </>
  );
};

export default ResumeList;
