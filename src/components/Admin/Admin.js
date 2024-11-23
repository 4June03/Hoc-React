import SideBar from "./Sidebar";
import "./Admin.scss";
import "react-pro-sidebar/dist/css/styles.css";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

const Admin = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="admin-container">
      <div className="admin-sidebar">
        <SideBar collapsed={collapsed}></SideBar>
      </div>
      <div className="admin-content">
        <FaBars onClick={() => setCollapsed(!collapsed)}></FaBars> Content goes
        here
      </div>
    </div>
  );
};

export default Admin;
