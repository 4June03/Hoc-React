import logo from "./logo.svg";
import "./App.scss";
import { useDispatch, useSelector } from "react-redux";
import { increaseCounter, decreaseCounter } from "./redux/action/counterAction";
import React from "react"; //Để viết class Component thì cần import thư viện React
import Header from "./components/header/header";
import { Outlet, NavLink } from "react-router-dom";

const App = () => {
  return (
    <div className="app-container">
      <div className="header-container">
        <Header></Header>
      </div>
      <div className="body-container">
        <div className="sidenav-container"></div>
        <div className="content-container">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default App;
