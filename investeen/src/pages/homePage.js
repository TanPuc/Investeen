
import "./styles/homePage.css"

function homePage () {
    return (
        <div className="homePage">
            <div className="App-NavigationBar">
                <h1 className="App-Logo">Investeen</h1>
                    <div className="App-NavigationBarTopRight">
                        <h2 className="App-NavBox" href=''>Kiểm tra</h2>
                        <h2 className="App-NavBox">Kế hoạch chi tiêu</h2>
                        <h2 className="App-NavBox">Đ</h2>
                    </div>
                <h1 className="App-UserLogo"><img className='User' src={require('../Assets/Avatar.png')}></img></h1>
            </div>
        </div>
    )

}


export default homePage;