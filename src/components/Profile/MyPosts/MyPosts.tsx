import React, {ChangeEvent, ChangeEventHandler, RefObject} from "react";
import {Post} from "./Post/Post";
import s from './MyPosts.module.css'
import {ProfilePageType} from "../../../redux/state";


type MyPostsType = {
    posts: ProfilePageType
    addPost: () => void
    newPostText: string
    updateNewPostText: (newText: string)=>void
}
export const MyPost = (props: MyPostsType) => {
    let postsElements = props.posts.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)


    const addText = () => {
        props.addPost()
    }

let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.updateNewPostText(e.currentTarget.value)
}
return (
    <div className={s.postBlock}>
        <h3>My post</h3>
        <div>
            <div><textarea  onChange={onPostChange} value={props.newPostText}></textarea></div>
            <div>
                <button onClick={addText}>Add post</button>
            </div>


        </div>
        <div className={s.posts}>
            {postsElements}
        </div>

    </div>


)
}
