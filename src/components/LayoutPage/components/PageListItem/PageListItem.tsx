import React from "react";
import { Link } from "react-router-dom";

interface Props {
  to: string;
  name: string;
  icon: React.ReactElement;
}

const PageListItem = ({ to, name, icon }: Props) => (
  <Link to={to}>
    <div className="siderItem" style={{ marginTop: 16 }}>
      {React.cloneElement(icon, {
        style: { fontSize: "32px", paddingRight: 8 },
      })}
      {name}
    </div>
  </Link>
);

export default PageListItem;
