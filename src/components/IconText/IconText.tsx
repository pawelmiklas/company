import { Space } from "antd";
import React, { FunctionComponent } from "react";

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

export default IconText;
