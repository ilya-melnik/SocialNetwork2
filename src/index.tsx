
import {RootStateType, state, subscriber} from "./redux/state";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {addDialogMessage, addPost, updateNewDialogMesagge, updateNewPostText} from "./redux/state";
import React from "react";

let rerenderEntireTree = (state:RootStateType) =>{
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} addDialogMessage={addDialogMessage} updateNewPostText={updateNewPostText} updateNewDialogMesagge={updateNewDialogMesagge}/>
        </BrowserRouter>, document.getElementById('root')
    );
}
rerenderEntireTree(state)

subscriber(rerenderEntireTree)


// export let rerenderEntireTree = () => {
//     const root = ReactDOM.createRoot(document.getElementById('root'));
//     root.render(
//
//         <React.StrictMode>
//             <App state={state} addPost={addPost} />
//         </React.StrictMode>);
