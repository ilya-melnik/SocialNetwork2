import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import {Navbur} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {RootStateType} from "./redux/state";


type AppType = {
    state: RootStateType
    addPost: () => void
    updateNewPostText: (value: string) => void
}
const App = (props: AppType) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbur/>
                <div className='app-wrapper-content'>
                    <Route path={'/dialogs'} render={() => <Dialogs state={props.state.dialogsPage}/>}/>
                    <Route path={'/profile'}
                           render={() => <Profile profilePage={props.state.profilePage} addPost={props.addPost}
                                                  newPostsText={props.state.profilePage.newPostsText}
                                                  updateNewPostText={props.updateNewPostText}/>}/>

                </div>

                {/*<Profile/>*/}
            </div>
        </BrowserRouter>
    )
}

export default App;
