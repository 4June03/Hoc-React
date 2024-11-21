import logo from "./logo.svg";
import "./App.scss";
import { useDispatch, useSelector } from "react-redux";
import { increaseCounter, decreaseCounter } from "./redux/action/counterAction";
import React from "react"; //Để viết class Component thì cần import thư viện React
import Header from "./components/header/header";

const App = () => {
  return (
    <div className="App">
      <Header></Header>
    </div>
  );
};

export default App;
