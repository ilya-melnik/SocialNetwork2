import React from "react";
import {Post} from "./Post/Post";
import s from './MyPosts.module.css'


export const MyPost = () => {
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
                <Post message="How are you ?" like={15}/>
                <Post message="I'm fine." like={12}/>
                <Post message={"and you?"} like={10}/>

            </div>

        </div>


    )
}
