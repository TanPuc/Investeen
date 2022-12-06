import "./styles/investPage.css"

function investPage () {
    return (
        <div className="investPage">
            <div className="App-NavigationBar">
                <p className="App-Logo">Investeen</p>
                    <div className="App-NavigationBarTopRight">
                        <a className="App-NavBox" href=''>Kiểm tra</a>
                        <a className="App-NavBox">Kế hoạch chi tiêu</a>
                        <a className="App-NavBox">Đ</a>
                    </div>
                <a className="App-UserLogo"><img className='User' src={require('../Assets/Avatar.png')}></img></a>
            </div>
        </div>
    )

}


export default investPage;