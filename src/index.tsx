import {rerenderEntireTree} from "./render";
import {state} from "./redux/state";

rerenderEntireTree(state)




// export let rerenderEntireTree = () => {
//     const root = ReactDOM.createRoot(document.getElementById('root'));
//     root.render(
//
//         <React.StrictMode>
//             <App state={state} addPost={addPost} />
//         </React.StrictMode>);
