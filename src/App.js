import logo from "./logo.svg";
import "./App.scss";
import { useDispatch, useSelector } from "react-redux";
import { increaseCounter, decreaseCounter } from "./redux/action/counterAction";
import React from "react"; //Để viết class Component thì cần import thư viện React
import Header from "./components/header/header";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Header></Header>
      <div>
        test link
        <div>
          <button>
            <Link to={"/user"}>go to user page</Link>
          </button>
          <button>
            <Link to={"/admin"}>go to admin page</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
