import * as React from "react";
import { Link, Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "./styles/planPage.css";

function planPage() {
  return (
    <div className="NavBar">
      <div className="App-NavigationBar">
        <div className="App-Logo">
          <img className="Logo" src={require("../logo.png")}></img>
        </div>
        <nav className="item">
          <ul className="ul">
            <li>
              <Link to="/home">Trang chủ</Link>
            </li>
            <li>
              <Link to="/financialplan">Kế hoạch chi tiêu</Link>
            </li>
            <li>
              <Link to="/investment">Đầu tư</Link>
            </li>
          </ul>
        </nav>
        <a className="App-UserLogo"><img className='User' src={require('../Assets/userAvatar.png')}></img></a>
      </div>
    </div>
    // <div>
    //   <NavBar/>
    // </div>
  )
}

export default planPage
