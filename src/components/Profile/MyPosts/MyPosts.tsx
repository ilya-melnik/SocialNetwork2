import React from "react";
import {Post} from "./Post/Post";
import s from './MyPosts.module.css'
import {message} from "antd";


export const MyPost = () => {
    const PostData = [
        {id: 1, message: 'How are you ?', likesCount: 15},
        {id: 1, message: 'I\'m fine', likesCount: 11},
        {id: 1, message: 'and you?', likesCount: 5},
    ]
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
                <Post id={PostData[0].id} message={PostData[0].message} like={PostData[0].likesCount}/>
                <Post id={PostData[1].id} message={PostData[1].message} like={PostData[1].likesCount}/>
                <Post id={PostData[2].id} message={PostData[2].message} like={PostData[2].likesCount}/>

            </div>

        </div>


    )
}
