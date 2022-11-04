import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import {Navbur} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";

const App = () => {
    return (
        <div className='app-wrapper'>
        <Header/>
        <Navbur/>
        <Profile/>
    </div>

    )
}

export default App;
