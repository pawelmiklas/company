import {
  AppstoreOutlined,
  CompressOutlined,
  DashOutlined,
  DownOutlined,
  FilterOutlined,
  FullscreenOutlined,
  SearchOutlined,
  ShareAltOutlined,
  SortAscendingOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import {
  Button,
  Card,
  Col,
  Divider,
  Dropdown,
  Input,
  Menu,
  Radio,
  Row,
  Select,
  Typography,
} from "antd";
import React, { useMemo, useState } from "react";
import { useStore } from "store/store";
import { colors } from "utils/theme";
import Filters from "./components/Filters/Filters";
import "./EntitiesPage.css";

const { Title, Text } = Typography;
const { Option } = Select;

const EntitiesPage = () => {
  const [dropDownValue, setDropDownValue] = useState<"Followed" | "My">(
    "Followed"
  );
  const [radioValue, setRadioValue] = useState<"mosaic" | "list">("mosaic");
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState<"asc" | "desc">("asc");
  const [isFilterShown, setIsFilterShown] = useState(false);
  const { photos } = useStore();

  const filteredPhotos = useMemo(() => {
    const filtered = photos.filter((item) => {
      const isFollowed =
        dropDownValue === "Followed" ? item.id % 2 === 0 : item.id % 2 !== 0;

      return isFollowed && item.title.includes(filter);
    });

    if (sort === "asc") {
      filtered.sort((a, b) => a.title.localeCompare(b.title));
    } else {
      filtered.sort((a, b) => b.title.localeCompare(a.title));
    }

    return filtered;
  }, [dropDownValue, filter, sort, photos]);

  return (
    <div className="entitiesWrapper">
      <Row justify="space-between">
        <Col span={20}>
          <Title level={4}>Entities</Title>
        </Col>
        <Col span={4}>
          <Radio.Group
            value={radioValue}
            onChange={(value) => {
              setRadioValue(value.target.value);
            }}
          >
            <Radio.Button value="mosaic">
              <AppstoreOutlined style={{ marginRight: 8 }} />
              Mosaic
            </Radio.Button>
            <Radio.Button value="list">
              <UnorderedListOutlined style={{ marginRight: 8 }} />
              List
            </Radio.Button>
          </Radio.Group>
        </Col>
      </Row>
      <Row style={{ padding: "16px 0 " }} justify="space-between">
        <Col span={17}>
          <Row>
            <Select defaultValue="All" style={{ width: 80 }}>
              <Option value="All">All</Option>
            </Select>
            <DashOutlined style={{ fontSize: 28, padding: "0 8px 0 16px" }} />
            <Divider className="entityDivider" type="vertical" />
            <Button
              className="entityFilterButton"
              type="text"
              icon={<SortAscendingOutlined />}
              onClick={() => {
                setSort(sort === "asc" ? "desc" : "asc");
              }}
            >
              Sort
            </Button>
            <Divider className="entityDivider" type="vertical" />
            <Button
              className="entityFilterButton"
              type="text"
              icon={<FilterOutlined />}
              onClick={() => {
                setIsFilterShown((prevState) => !prevState);
              }}
            >
              Filter
            </Button>
            <Divider className="entityDivider" type="vertical" />
            <Button
              className="entityFilterButton"
              type="text"
              icon={<CompressOutlined />}
            />
            <Divider className="entityDivider" type="vertical" />
            <Button
              className="entityFilterButton"
              type="text"
              icon={<ShareAltOutlined />}
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
              }}
            >
              Share
            </Button>
          </Row>
          <Title level={4}></Title>
        </Col>
        <Col span={7}>
          <div className="entitiesHeadingWrapper">
            <Input
              size="small"
              placeholder="Search..."
              suffix={<SearchOutlined />}
              className="entitiesInput"
              onChange={(e) => {
                setFilter(e.target.value || "");
              }}
            />
            <Dropdown
              overlay={
                <Menu>
                  <Menu.Item
                    key="1"
                    style={{ color: colors.primary }}
                    onClick={() => setDropDownValue("Followed")}
                  >
                    Followed
                  </Menu.Item>
                  <Menu.Item
                    key="2"
                    style={{ color: colors.primary }}
                    onClick={() => setDropDownValue("My")}
                  >
                    My
                  </Menu.Item>
                </Menu>
              }
              trigger={["click"]}
              className="entitiesDropDown"
            >
              <span
                onClick={(e) => e.preventDefault()}
                style={{ color: colors.primary }}
              >
                <FullscreenOutlined />
                <span style={{ marginRight: 4 }}>{dropDownValue}</span>
                <DownOutlined />
              </span>
            </Dropdown>
          </div>
        </Col>
      </Row>
      {isFilterShown && <Filters />}
      <Row gutter={[16, 16]}>
        {filteredPhotos.map((item) => (
          <Col key={item.id} span={radioValue === "mosaic" ? 6 : 24}>
            <Card bordered={false} style={{ width: "100%" }}>
              <Row gutter={16}>
                <Col span={radioValue === "mosaic" ? 8 : 2}>
                  <img className="entityImage" alt="" src={item.thumbnailUrl} />
                </Col>
                <Col span={radioValue === "mosaic" ? 16 : 22}>
                  <Title level={5}>World SAS Ltd</Title>
                  <Text>{`${item.title.substring(0, 35)} ...`}</Text>
                </Col>
              </Row>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default EntitiesPage;
