import React from "react";
import s from './Profile.module.css'

export const Profile = () => {
    return (

        <div className={s.content}>
            <img alt='#' src='https://cdn.pixabay.com/photo/2017/06/15/16/50/panorama-2405958__340.jpg'/>
            <div>
                <img className={s.avatar} src="https://cdn.pixabay.com/photo/2013/04/01/03/45/cat-98359__340.jpg" alt="cat"/>
                ava dicription
            </div>
            <div>
                <div>My post
                    <div>New post</div>
                    <div>
                        <div className={s.item}>Post 1</div>
                        <div>Post 2</div>
                    </div>
                </div>
            </div>


        </div>)
}
