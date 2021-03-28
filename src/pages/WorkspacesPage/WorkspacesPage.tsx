import {
  CalendarOutlined,
  HomeOutlined,
  PartitionOutlined,
} from "@ant-design/icons";
import { Card, Col, Row, Typography } from "antd";
import ResumeList from "pages/DashboardPage/components/ResumeList/ResumeList";
import React from "react";
import { useLocation } from "react-router-dom";
import Banner from "../../assets/baner.png";
import "./WorkspacesPage.css";

const { Title, Text } = Typography;

type List = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const list: List[] = [
  {
    title: "Explore your entities",
    description:
      "Ex laborum non officia non magna. In esse nostrud voluptate id sint qui ullamco aliqua nostrud non mollit exercitation quis voluptate. Eiusmod cillum sunt officia duis veniam eu excepteur dolor.",
    icon: <HomeOutlined className="workspacesIcon" />,
  },
  {
    title: "Structure the ownership",
    description:
      "Et aliqua est ea mollit excepteur enim qui laborum consequat qui nulla incididunt consectetur ut. Enim elit proident Lorem cupidatat anim duis enim incididunt do laboris excepteur.",
    icon: <PartitionOutlined className="workspacesIcon" />,
  },
  {
    title: "Define the calendar",
    description:
      "Sint occaecat enim aute aute ad pariatur cupidatat nulla exercitation culpa et non. Nostrud commodo non nulla exercitation aliqua qui enim enim voluptate id esse sint.",
    icon: <CalendarOutlined className="workspacesIcon" />,
  },
];

const WorkspacesPage = () => {
  const location = useLocation<{ title: string }>();

  return (
    <div className="workspacesWrapper">
      <Row gutter={16}>
        <Col span={24}>
          <Card
            className="workspacesCard"
            bordered={false}
            cover={<img alt="" src={Banner} />}
          >
            <Row gutter={16}>
              <Col>
                <HomeOutlined className="workspacesIcon" />
              </Col>
              <Col>
                <Title level={5}>{location.state.title}</Title>
                <Text>
                  Ullamco id ex dolore eu nisi consequat. Enim ea veniam irure
                  enim tempor et. Ea nulla ex fugiat voluptate id
                </Text>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <div className="workspacesCardWrapper">
        <Title level={5}>Start working on corporate matters</Title>
        <Row gutter={16}>
          {list.map((item) => (
            <Col key={item.title} span={8}>
              <Card bordered={false}>
                {item.icon}
                <Title level={5}>{item.title}</Title>
                <Text>{item.description} </Text>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      <ResumeList withTags />
    </div>
  );
};

export default WorkspacesPage;
