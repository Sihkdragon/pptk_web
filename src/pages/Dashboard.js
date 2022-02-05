import React from "react";
import Sidebar from "../component/Sidebar";
import Dashboardmain from "../component/pages/Dashboardmain";
const Dashboard = () => {
  return (
    <div id="Container" className="flex flex-row">
      <div id="sidebar" className="min-h-screen bg-color1 w-1/5">
        <Sidebar />
      </div>
      <div id="mainSection">
        <Dashboardmain />
      </div>
    </div>
  );
};

export default Dashboard;
