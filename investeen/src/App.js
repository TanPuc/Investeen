// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <div className="App-NavigationBar">
//         <p className="App-Logo"><img className='Logo' src={require('./logo.png')}></img></p>
//         <div className="App-NavigationBarTopRight">
//           <a className="App-NavBox">Kiểm tra</a>
//           <a className="App-NavBox">Kế hoạch chi tiêu</a>
//           <a className="App-NavBox">Đầu tư</a>
//         </div>
//         <a className="App-UserLogo"><img className='User' src={require('./Assets/Avatar.png')}></img></a>
//       </div>
//     </div>
//   );
// }

// export default App;

import * as React from "react";
import { Link, Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "./App.css";

function home() {
  return (
    <div className="App">
      <div className="App-NavigationBar">
        <p className="App-Logo">
          <img className="Logo" src={require("./logo.png")}></img>
        </p>
        <div className="App-NavigationBarTopRight">
          <a className="App-NavBox">Trang chủ</a>
          <a className="App-NavBox">Kế hoạch chi tiêu</a>
          <a className="App-NavBox">Đầu tư</a>
        </div>
        <a className="App-UserLogo"><img className='User' src={require('./Assets/userAvatar.png')}></img></a>
      </div>

      <div className='home-first-section'> 
      <h1 className='first-section'>Investeen</h1>
      <h2 className='second-section'>Hiểu được rõ hơn về xu hướng chi tiêu của bản thân. Lên kế hoạch tiết kiệm cho những mục tiêu tương lai & Xây dựng nền tảng về kiến thức tài chính</h2>
      </div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ae
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}
function App() {
  return (
    <div>
      <div>

      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
    </div>
    
  );
  
}

export default App;
