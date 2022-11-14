import s from './Post.module.css'
import React from "react";


export type PostType = {
    id:number
    message: string
    like: number
}
export const Post = (props: PostType) => {
    return (
        <div className={s.item}>
            <img src='https://cdn.pixabay.com/photo/2015/01/31/12/36/cat-618470__340.jpg'/>
            {props.message}
            <div>
                <span>like{props.like}</span>
            </div>

        </div>
    )
}
