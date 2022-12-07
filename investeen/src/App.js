import * as React from "react";
import { Link, Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "./App.css";

// function Appa() {
//   return (
//     <div className="App">
//       <div className="App-NavigationBar">
//         <p className="App-Logo">
//           <img className="Logo" src={require("./logo.png")}></img>
//         </p>
//         <div className="App-NavigationBarTopRight">
//           <a className="App-NavBox">Trang chủ</a>
//           <a className="App-NavBox">Kế hoạch chi tiêu</a>
//           <a className="App-NavBox">Đầu tư</a>
//         </div>
//         <a className="App-UserLogo"><img className='User' src={require('./Assets/userAvatar.png')}></img></a>
//       </div>

//       <div className='home-first-section'>
//       <h1 className='first-section'>Investeen</h1>
//       <h2 className='second-section'>Hiểu được rõ hơn về xu hướng chi tiêu của bản thân. Lên kế hoạch tiết kiệm cho những mục tiêu tương lai & Xây dựng nền tảng về kiến thức tài chính</h2>
//       </div>
//     </div>
//   );
// }
function App() {
  return (
    <div className="NavBar">
      <div className="App-NavigationBar">
        <div className="App-Logo">
          <img className="Logo" src={require("./logo.png")}></img>
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
      </div>
    </div>
    // <div>
    //   <NavBar/>
    // </div>
  )
}

export default App
