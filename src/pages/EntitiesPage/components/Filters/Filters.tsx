import { CloseOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Card, Col, Input, Row, Select } from "antd";
import "./Filters.css";
import React from "react";

const Filters = () => (
  <Card style={{ marginBottom: 16 }}>
    <Row gutter={16} style={{ paddingBottom: 16, padding: 0 }}>
      <Col span={24}>
        <Row className="entityFilterRow">
          <Button
            className="entityFilterButton"
            type="text"
            icon={<CloseOutlined />}
          >
            Where
          </Button>
          <Select
            defaultValue="Company"
            bordered={false}
            className="largeFilter"
          />
          <Select
            defaultValue="Contains"
            bordered={false}
            className="mediumFilter"
          />
          <Input placeholder="Type..." className="mediumFilter" />
        </Row>
        <Row className="entityFilterRow">
          <Button
            className="entityFilterButton"
            type="text"
            icon={<CloseOutlined />}
          >
            Where
          </Button>
          <Select
            defaultValue="Status"
            bordered={false}
            className="mediumFilter"
          />
          <Select defaultValue="Is" bordered={false} className="smallFilter" />
          <Input placeholder="Type..." className="mediumFilter" />
          <Select defaultValue="In" bordered={false} className="smallFilter" />
          <Input placeholder="Entity..." className="mediumFilter" />
        </Row>
        <Row className="entityFilterRow">
          <Button
            className="entityFilterButton"
            type="text"
            icon={<CloseOutlined />}
          >
            And
          </Button>
          <Select
            defaultValue="Status"
            bordered={false}
            className="mediumFilter"
          />
          <Select
            defaultValue="Ends before"
            bordered={false}
            className="largeFilter"
          />
          <Input placeholder="Date" className="mediumFilter" />
          <Select defaultValue="In" bordered={false} className="smallFilter" />
          <Input placeholder="Entity..." className="mediumFilter" />
        </Row>
        <Row className="entityFilterRow">
          <Button
            className="entityFilterButton"
            type="text"
            icon={<PlusOutlined />}
          >
            Add filter
          </Button>
          <Select
            defaultValue="choose property"
            bordered={false}
            className="largeFilter"
          />
        </Row>
      </Col>
    </Row>
  </Card>
);

export default Filters;
