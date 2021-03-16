import React from "react";
import ResumeList from "./components/ResumeList/ResumeList";
import "./DashboardPage.css";

interface Props {}

const DashboardPage = (props: Props) => {
  return (
    <div className="dashboardWrapper">
      <ResumeList />
    </div>
  );
};

export default DashboardPage;
