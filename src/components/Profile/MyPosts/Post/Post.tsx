import s from './Post.module.css'
import React from "react";

export const Post = () => {
    return (
            <div className={s.item}>

                <img src='https://cdn.pixabay.com/photo/2015/01/31/12/36/cat-618470__340.jpg'/>
                Post 1
                <span>like</span>
            </div>
    )
}
