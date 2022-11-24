import React from "react";
import {Post} from "./Post/Post";
import s from './MyPosts.module.css'



export const MyPost = () => {
    const posts = [
        {id: 1, message: 'How are you ?', likesCount: 15},
        {id: 1, message: 'I\'m fine', likesCount: 11},
        {id: 1, message: 'and you?', likesCount: 5},
        {id: 1, message: 'and you?', likesCount: 5},
        {id: 1, message: 'and you?', likesCount: 5},
    ]
    let postsElements = posts.map( p =>  <Post id={p.id} message={p.message} like={p.likesCount}/>)
    return (
        <div className={s.postBlock}>
            <h3>My post</h3>
            <div>
                <div><textarea></textarea></div>
                <div>
                    <button>Add post</button>
                </div>


            </div>
            <div className={s.posts}>
                {postsElements}
            </div>

        </div>


    )
}
