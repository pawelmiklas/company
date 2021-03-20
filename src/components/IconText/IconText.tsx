import { Space } from "antd";
import React from "react";

type IconTextProps = {
  text: string;
  icon?: React.ReactNode;
};

const IconText = ({ icon, text }: IconTextProps) => (
  <Space style={{ padding: "4px 12px 0 0" }}>
    {icon}
    {text}
  </Space>
);

export default IconText;
