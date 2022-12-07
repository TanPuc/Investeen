import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import PlanPage from './pages/planPage';
import Investment from './pages/investPage';
import reportWebVitals from './reportWebVitals';
import { Link, Route, Routes, BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Router>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/home' element={<App/>}/>
        <Route path='/financialplan' element={<PlanPage/>}/>
        <Route path='/investment' element={<Investment/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
