import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import "./CardSiderItem.css";

interface Props {
  name: string;
  icon: React.ReactElement;
  to: string;
  buttonIcon: React.ReactElement;
}

const CardSiderItem = ({ name, to, icon, buttonIcon }: Props) => (
  <div className="cardSiderItem">
    {React.cloneElement(icon, { style: { fontSize: "24px" } })}
    <p>{name}</p>
    <Link to={to}>
      <Button icon={buttonIcon} />
    </Link>
  </div>
);

export default CardSiderItem;
