import ResumeList from "pages/DashboardPage/components/ResumeList/ResumeList";
import React from "react";

interface Props {}

const WorkspacesPage = (props: Props) => {
  return (
    <div>
      <ResumeList withTags />
    </div>
  );
};

export default WorkspacesPage;
