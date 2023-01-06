import React from "react";
import s from './Profile.module.css'
import {MyPost} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType, RootStateType} from "../../redux/state";



type ProfileType = {
    state: ProfilePageType
    addPost: (value:string)=>void

}

export const Profile = (props: ProfileType) => {

    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPost posts={props.state} addPost={props.addPost}/>
        </div>)
}
