import logo from "./logo.svg";
import "./App.scss";
import { useDispatch, useSelector } from "react-redux";
import { increaseCounter, decreaseCounter } from "./redux/action/counterAction";
import MyComponent from "./components/MyComponent"; //import MyComponent vào App
import React from "react"; //Để viết class Component thì cần import thư viện React

const App = () => {
  return <div className="App">Hello worlds!</div>;
};

export default App;
