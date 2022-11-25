import React from "react";
import {Post} from "./Post/Post";
import s from './MyPosts.module.css'
import {PostType, ProfilePageType} from "../../../redux/state";


type MyPostsType = {
    posts: ProfilePageType
}

export const MyPost = (props: MyPostsType) => {

    let postsElements = props.posts.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)
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
