import {
  BorderLeftOutlined,
  CloseOutlined,
  DiffOutlined,
  EditOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Button,
  Card,
  Col,
  Descriptions,
  Divider,
  Input,
  Row,
  Select,
  Table,
  Tag,
  Typography,
  Upload,
  UploadProps,
} from "antd";
import { useFormik } from "formik";
import useToggle from "hooks/useToggle";
import React from "react";
import { useStore } from "store/store";
import { matchPhoto } from "utils/collectionMatches";
import { colors } from "utils/theme";
import "./ProfilePage.css";
import {
  feesColumns,
  feesData,
  proposalsColumns,
  proposalsData,
  reviewsColumns,
  reviewsData,
} from "./ProfilePage.utils";

const { Title } = Typography;
const { Option } = Select;

const options = [
  "Edith",
  "handle",
  "please",
  "possibly",
  "region",
  "person",
  "wood",
  "rush",
  "liquid",
];

const props: UploadProps = {
  name: "file",
  headers: {
    authorization: "authorization-text",
  },
};

const ProfilePage = () => {
  const { users, photos } = useStore();
  const [isUserInfoEditable, setIsUserInfoEditable] = useToggle(false);
  const [isProfileEditable, setIsProfileEditable] = useToggle(false);
  const form = useFormik({
    initialValues: {
      name: "Vera",
      email: "babiife@evuledo.ls",
      country: "Dominican Republic",
      city: "Nicaragua",
      phone: "397627",
      expertise: ["possibly"],
      specialties: ["rush"],
      admission: ["liquid", "person"],
      counties: ["wood"],
    },
    onSubmit: () => {},
  });

  return (
    <div className="workspacesWrapper">
      <Row gutter={16}>
        <Col span={24}>
          <Card bordered={false} style={{ width: "100%" }}>
            <Row className="profilePageRow">
              <Button type="text" icon={<BorderLeftOutlined />}>
                Message
              </Button>
              <Button type="text" icon={<EditOutlined />}>
                Create a request
              </Button>
              <Button type="text" icon={<DiffOutlined />}>
                Add to cluster
              </Button>
              <Button type="text" icon={<CloseOutlined />} />
            </Row>
            <Row>
              <Col span={3}>
                <div className="cardTitleWrapper">
                  <Avatar
                    size={64}
                    src={matchPhoto(photos, users[0].id)?.thumbnailUrl}
                  />
                  <Title
                    level={5}
                    style={{ margin: "8px 0 0 0", color: colors.primary }}
                  >
                    See profile
                  </Title>
                </div>
              </Col>
              <Col span={21}>
                <Row className="profilePageRowInfo">
                  <Button
                    onClick={setIsProfileEditable}
                    type="text"
                    icon={<EditOutlined />}
                  />
                </Row>
                <Descriptions labelStyle={{ fontWeight: 500 }} column={2}>
                  <Descriptions.Item label="Name">
                    <Col span={8}>
                      {isProfileEditable ? (
                        <Input
                          size="small"
                          id="name"
                          value={form.values.name}
                          onChange={form.handleChange}
                        />
                      ) : (
                        form.values.name
                      )}
                    </Col>
                  </Descriptions.Item>
                  <Descriptions.Item label="City">
                    <Col span={8}>
                      {isProfileEditable ? (
                        <Input
                          id="city"
                          size="small"
                          value={form.values.city}
                          onChange={form.handleChange}
                        />
                      ) : (
                        form.values.city
                      )}
                    </Col>
                  </Descriptions.Item>
                  <Descriptions.Item label="Email">
                    <Col span={8}>
                      {isProfileEditable ? (
                        <Input
                          id="email"
                          size="small"
                          value={form.values.email}
                          onChange={form.handleChange}
                        />
                      ) : (
                        form.values.email
                      )}
                    </Col>
                  </Descriptions.Item>
                  <Descriptions.Item label="Phone">
                    <Col span={8}>
                      {isProfileEditable ? (
                        <Input
                          id="phone"
                          size="small"
                          value={form.values.phone}
                          onChange={form.handleChange}
                        />
                      ) : (
                        form.values.phone
                      )}
                    </Col>
                  </Descriptions.Item>
                  <Descriptions.Item label="Country">
                    <Col span={8}>
                      {isProfileEditable ? (
                        <Input
                          id="country"
                          size="small"
                          value={form.values.country}
                          onChange={form.handleChange}
                        />
                      ) : (
                        form.values.country
                      )}
                    </Col>
                  </Descriptions.Item>
                </Descriptions>
              </Col>
            </Row>
            <Divider type="horizontal" style={{ margin: 16 }} />
            <Row>
              <Col span={12}>
                <Descriptions
                  title={
                    <Row className="profilePageInfo">
                      User information
                      <Button
                        type="text"
                        onClick={setIsUserInfoEditable}
                        style={{ margin: "0 32px" }}
                        icon={<EditOutlined />}
                      />
                    </Row>
                  }
                  layout="vertical"
                  labelStyle={{ fontWeight: 500 }}
                  column={1}
                >
                  <Descriptions.Item label="Expertise">
                    <Col span={20}>
                      {isUserInfoEditable ? (
                        <Select
                          id="expertise"
                          size="small"
                          mode="multiple"
                          showArrow
                          value={form.values.expertise}
                          onChange={(values) => {
                            form.setFieldValue("expertise", values);
                          }}
                        >
                          {options.map((item) => (
                            <Option key={item} value={item}>
                              {item}
                            </Option>
                          ))}
                        </Select>
                      ) : (
                        form.values.expertise.map((item) => (
                          <Tag key={item} color="blue" style={{ margin: 4 }}>
                            {item}
                          </Tag>
                        ))
                      )}
                    </Col>
                  </Descriptions.Item>
                  <Descriptions.Item label="Specialties">
                    <Col span={20}>
                      {isUserInfoEditable ? (
                        <Select
                          id="specialties"
                          size="small"
                          mode="multiple"
                          showArrow
                          value={form.values.specialties}
                          onChange={(values) => {
                            form.setFieldValue("specialties", values);
                          }}
                        >
                          {options.map((item) => (
                            <Option key={item} value={item}>
                              {item}
                            </Option>
                          ))}
                        </Select>
                      ) : (
                        form.values.specialties.map((item) => (
                          <Tag key={item} color="blue" style={{ margin: 4 }}>
                            {item}
                          </Tag>
                        ))
                      )}
                    </Col>
                  </Descriptions.Item>
                  <Descriptions.Item label="Admission to practice law">
                    <Col span={20}>
                      {isUserInfoEditable ? (
                        <Select
                          id="admission"
                          size="small"
                          mode="multiple"
                          showArrow
                          value={form.values.admission}
                          onChange={(values) => {
                            form.setFieldValue("admission", values);
                          }}
                        >
                          {options.map((item) => (
                            <Option key={item} value={item}>
                              {item}
                            </Option>
                          ))}
                        </Select>
                      ) : (
                        form.values.admission.map((item) => (
                          <Tag key={item} color="blue" style={{ margin: 4 }}>
                            {item}
                          </Tag>
                        ))
                      )}
                    </Col>
                  </Descriptions.Item>
                  <Descriptions.Item label="Counties">
                    <Col span={20}>
                      {isUserInfoEditable ? (
                        <Select
                          id="counties"
                          size="small"
                          mode="multiple"
                          showArrow
                          value={form.values.counties}
                          onChange={(values) => {
                            form.setFieldValue("counties", values);
                          }}
                        >
                          {options.map((item) => (
                            <Option key={item} value={item}>
                              {item}
                            </Option>
                          ))}
                        </Select>
                      ) : (
                        form.values.counties.map((item) => (
                          <Tag key={item} color="blue" style={{ margin: 4 }}>
                            {item}
                          </Tag>
                        ))
                      )}
                    </Col>
                  </Descriptions.Item>
                </Descriptions>
              </Col>
              <Col span={12}>
                <Descriptions
                  title="Panel information"
                  layout="vertical"
                  labelStyle={{ fontWeight: 500 }}
                  column={1}
                >
                  <Descriptions.Item label="Hourly fee">
                    Zhou Maomao
                  </Descriptions.Item>
                  <Descriptions.Item label="Terms &amp; conditions">
                    1810000000
                  </Descriptions.Item>
                  <Descriptions.Item label="Services &amp; projects">
                    <Upload {...props}>
                      <Button icon={<UploadOutlined />}>Click to Upload</Button>
                    </Upload>
                  </Descriptions.Item>
                  <Descriptions.Item label="Internal correspondents">
                    Certainly
                  </Descriptions.Item>
                </Descriptions>
              </Col>
            </Row>
            <Divider type="horizontal" style={{ margin: 16 }} />
            <Title level={5}>Proposals</Title>
            <Table
              columns={proposalsColumns}
              dataSource={proposalsData}
              size="small"
              pagination={false}
            />
            <Title level={5} style={{ paddingTop: 16 }}>
              Internal Reviews
            </Title>
            <Table
              columns={reviewsColumns}
              dataSource={reviewsData}
              size="small"
              pagination={false}
            />
            <Title level={5} style={{ paddingTop: 16 }}>
              Amount of fees
            </Title>
            <Table
              columns={feesColumns}
              dataSource={feesData}
              size="small"
              pagination={false}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ProfilePage;
