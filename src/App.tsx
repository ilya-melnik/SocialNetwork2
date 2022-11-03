import React from "react";
import "./App.css";
import Header from "./components/Header";
import {Navbur} from "./components/Navbar";
import {Profile} from "./components/Profile";

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
