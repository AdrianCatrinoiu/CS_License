import React from "react";
import ProfileDetails from "../../components/ProfileDetails";
import WithAuth from "../../hoc/withAuth";
import DashBoardLayout from "../../layouts/DashboardLayout";
import "./styles.scss";

const Dashboard = () => {
  return (
    <WithAuth>
      <DashBoardLayout>
        <ProfileDetails />
      </DashBoardLayout>
    </WithAuth>
  );
};

export default Dashboard;
