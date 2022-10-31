import React from "react";
import "./App.css";
import Header from "./Header";
import Technologies from "./Technologies";

const App = () => {
    return <div className="App">
        <div className='app-wrapper'>
            <header className='header'>
                <img alt='logo' src='https://cdn.pixabay.com/photo/2016/11/25/18/24/cat-1858951_960_720.png' height='62'/>
            </header>
            <nav className='nav'>
                <div>
                    <a href='#'>Profile</a>
                </div>
                <div>
                    <a href='#'>Message</a>
                </div>
            </nav>

            <div className='content'></div>
        </div>


        <Header/>
        <Technologies/>
    </div>;
}

export default App;
