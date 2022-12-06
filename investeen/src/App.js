// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-NavigationBar">
        <p className="App-Logo"><img className='Logo' src={require('./logo.png')}></img></p>
        <div className="App-NavigationBarTopRight">
          <a className="App-NavBox">Trang chủ</a>
          <a className="App-NavBox">Kế hoạch chi tiêu</a>
          <a className="App-NavBox">Đầu tư</a>
        </div>
        <a className="App-UserLogo"><img className='User' src={require('./Assets/userAvatar.png')}></img></a>
      </div>

      <div className='home-first-section'> 
      <h1 className='headline'>Investeen</h1>
      <h2 className='description'>Hiểu được rõ hơn về xu hướng chi tiêu của bản thân. Lên kế hoạch tiết kiệm cho những mục tiêu tương lai & Xây dựng nền tảng về kiến thức tài chính.</h2>     
      </div>

      <div className= 'test-button-ct'>  
      <button className='test-button' onClick='BẮT ĐẦU BÀI TEST'>
      <p className='start-test-button-text'>BẮT ĐẦU BÀI TEST</p>
</button> 
      </div>
      
      <div className='home-page-pic'>
      <img className='home-page-pic1' src={require('./Assets/homepagepic1.jpg')}></img>
      </div>

      <div className='home-second-section'> 
        <p className='reality'> 
        Tài chính luôn là một vấn đề “đau đầu” với tất cả mọi người, ở mọi độ tuổi, đặc biệt là các bạn trẻ ở trong độ tuổi Gen Z. Các bạn vẫn chưa hoàn toàn có sự hiểu biết và nhận thức đúng đắn về chi tiêu và lĩnh vực tài chính.
        <br></br>
        <br></br>
        Chính vì vậy nhóm RDOL đã khởi tạo trang web Investeen với mong muốn giúp đỡ các bạn trẻ có kế hoạch rõ ràng về việc quản lý tài chính, chi tiêu và tiết kiệm.
        </p>
        <img className='home-page-pic2' src={require('./Assets/homepagepic2.jpg')}></img>
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

export default App;
