import * as React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import "./styles/homePage.css";

function homePage() {
  return (
    <div className="App">
      <div className='home-first-section'> 
      <h1 className='headline'>Investeen</h1>
      <h2 className='description'>Hiểu được rõ hơn về xu hướng chi tiêu của bản thân. Lên kế hoạch tiết kiệm cho những mục tiêu tương lai & Xây dựng nền tảng về kiến thức tài chính.</h2>     
      </div>
      <div className= 'test-button-ct'>  
      <button className='test-button' onClick={() => console.log('BẮT ĐẦU BÀI TEST')}>
      <p className='start-test-button-text'><li>
              <Link to="/test">BẮT ĐẦU BÀI KIỂM TRA</Link>
            </li></p>
</button> 
      </div>
      <div className='home-page-pic'>
        <img className='home-page-pic1' src={require('../Assets/homepagepic1.jpg')} draggable="false"></img>
      </div>

      <div className='home-second-section'> 
        <p className='reality'> 
        Tài chính luôn là một vấn đề “đau đầu” với tất cả mọi người, ở mọi độ tuổi, đặc biệt là các bạn trẻ ở trong độ tuổi Gen Z. Các bạn vẫn chưa hoàn toàn có sự hiểu biết và nhận thức đúng đắn về chi tiêu và lĩnh vực tài chính.
        <br></br>
        <br></br>
        Chính vì vậy nhóm RDOL đã khởi tạo trang web Investeen với mong muốn giúp đỡ các bạn trẻ có kế hoạch rõ ràng về việc quản lý tài chính, chi tiêu và tiết kiệm.
        </p>
        <img className='home-page-pic2' src={require('../Assets/homepagepic2.jpg')} draggable="false"></img>
      </div>

      <div className='home-third-section'> 
        <p className='solution'>
        Chúng tôi đã nghiên cứu bộ câu hỏi của bài test dựa trên những nguồn uy tín cùng với sự tư vấn của những chuyên gia hàng đầu.
        <br></br>
        <br></br>
        <a href="https://www.16personalities.com/" title="nguồn tham khảo" target="_blank" className="nguon-tham-khao">Nguồn tham khảo </a>
        được nhiều chuyên gia công nhận mà chúng tôi tin dùng để xây dựng bộ câu hỏi của mình.
        </p>
        <img className='home-page-pic3' src={require('../Assets/homepagepic3.jpg')} draggable="false"></img>
      </div>

    </div>
  )
}

export default homePage
