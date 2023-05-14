import React from "react";
import s from './Profile.module.css'
import {MyPost} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType, RootStateType} from "../../redux/state";



type ProfileType = {
    profilePage: ProfilePageType
    addPost: ()=>void
    updateNewPostText: (newText: string)=>void

}

export const Profile = (props: ProfileType) => {

    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPost posts={props.profilePage}  addPost={props.addPost}   updateNewPostText={props.updateNewPostText} message={props.profilePage.newPostText}/>
        </div>)
}
