import React from "react";
import Publications from "./components/Publications/Publications";
import ResumeList from "./components/ResumeList/ResumeList";
import WorkspacesSlider from "./components/WorkspacesSlider/WorkspacesSlider";
import "./DashboardPage.css";

const DashboardPage = () => (
  <div className="dashboardWrapper">
    <Publications />
    <WorkspacesSlider />
    <ResumeList />
  </div>
);

export default DashboardPage;
