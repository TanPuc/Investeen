// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-NavigationBar">
        <p className="App-Logo">Investeen</p>
        <div className="App-NavigationBarTopRight">
          <a className="App-NavBox">Kiểm tra</a>
          <a className="App-NavBox">Kế hoạch chi tiêu</a>
          <a className="App-NavBox">Đầu tư</a>
        </div>
        <a className="App-UserLogo"><img src={require('./Assets/Avatar.png')}></img></a>
      </div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
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

export default App;
