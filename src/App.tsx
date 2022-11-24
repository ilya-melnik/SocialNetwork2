import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import {Navbur} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbur/>
                <div className='app-wrapper-content'>
                    <Route path={'/dialogs'} render={() => <Dialogs/>}/>
                    <Route path={'/profile'} component={Profile}/>

                </div>

                {/*<Profile/>*/}
            </div>
        </BrowserRouter>
    )
}

export default App;
