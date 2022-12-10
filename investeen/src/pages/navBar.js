import * as React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import "./styles/navBar.css"

function NavBar() {
    return (
        <div className="NavBar">
        <div className="App-NavigationBar">
          <div className="App-Logo">
            <img className="Logo" src={require("../logo.png")} draggable="false"></img>
          </div>
          <nav className="item">
            <ul className="ul">
              <li>
                <Link to="/home">Trang chủ</Link>
              </li>
              <li>
                <Link to="/test">Kiểm tra</Link>
              </li>
              <li>
                <Link to="/financialplan">Kế hoạch chi tiêu</Link>
              </li>
              <li>
                <Link to="/investment">Kiến Thức</Link>
              </li>
            </ul>
          </nav>
          <a className="App-UserLogo"><img className='User' src={require('../Assets/userAvatar.png')} draggable="false"></img></a>
        </div>
      </div>
    )
}

export default NavBar