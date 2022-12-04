import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-NavigationBar">
        <a className="App-Logo">Investeen</a>
        <div className="App-NavigationBarTopRight">
          <a className="App-FinancialTest">Kiểm tra</a>
          <a className="App-FinancialPlan">Kế hoạch chi tiêu</a>
          <a className="App-Investment">Đầu tư</a>
        </div>
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
