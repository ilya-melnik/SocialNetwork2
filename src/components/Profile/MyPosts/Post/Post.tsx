import s from './Post.module.css'
import React from "react";
import {PostType} from "../../../../redux/state";

type PostsType = PostType & {}

export const Post = (props: PostsType) => {
    return (
        <div className={s.item}>
            <img src='https://cdn.pixabay.com/photo/2015/01/31/12/36/cat-618470__340.jpg'/>
            {props.message}
            <div>
                <span>like{props.likesCount}</span>
            </div>

        </div>
    )
}
