import "./styles/planPage.css"

function planPage () {
    return (
        <div className="planPage">
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


export default planPage;