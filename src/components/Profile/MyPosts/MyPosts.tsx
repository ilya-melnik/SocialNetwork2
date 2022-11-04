import React from "react";
import {Post} from "./Post/Post";
import s from './MyPosts.module.css'
export const MyPost = () => {
    return (
        <div>
            My post
            <div>
                <textarea></textarea>
                <button>Add post</button>

            </div>
            <div className={s.posts}>
                <Post />
                <Post />
                <Post />

            </div>

        </div>


    )
}
