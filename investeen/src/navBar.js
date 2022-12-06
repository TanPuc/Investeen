import React from "react";
import { Link } from "react-router-dom";
import "./navBar.css"

const NavBar = () => {
  return (
    <div className="NavBar">
      <div className="App-NavigationBar">
        <div className="App-Logo">
          <img className="Logo" src={require("./logo.png")}></img>
        </div>
        <nav className="item">
          <ul className="ul">
            <li>
              <Link to="/">Trang chủ</Link>
            </li>
            <li>
              <Link to="/home">Trang chủ</Link>
            </li>
            <li>
              <Link to="/planpage">Kế hoạch chi tiêu</Link>
            </li>
            <li>
              <Link to="/investpage">Đầu tư</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
