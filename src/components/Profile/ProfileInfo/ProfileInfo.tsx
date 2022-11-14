import React from "react";
import s from './ProfileInfo.module.css'



export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img alt='#' src='https://cdn.pixabay.com/photo/2017/06/15/16/50/panorama-2405958__340.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                <img className={s.avatar} src="https://cdn.pixabay.com/photo/2013/04/01/03/45/cat-98359__340.jpg"
                     alt="cat"/>
                description
            </div>
        </div>
    );
};
