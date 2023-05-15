import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import {Navbur} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {addDialogMessage, FunctionType, RootStateType, updateNewDialogMesagge, updateNewPostText} from "./redux/state";


type AppType = {
    state: RootStateType
    addPost: () => void
    addDialogMessage: () => void
    updateNewPostText: (newText: string) => void
    updateNewDialogMesagge: (newText: string) => void


}
const App = (props: AppType) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbur/>
                <div className='app-wrapper-content'>
                    <Route path={'/dialogs'} render={() => <Dialogs addDialogMessage={props.addDialogMessage} state={props.state.dialogsPage} updateNewDialogMesagge={props.updateNewDialogMesagge} />}/>
                    <Route path={'/profile'} render={() => <Profile
                        profilePage={props.state.profilePage}
                        addPost={props.addPost} updateNewPostText={props.updateNewPostText} />}
                    />

                </div>

                {/*<Profile/>*/}
            </div>
        </BrowserRouter>
    )
}

export default App;
