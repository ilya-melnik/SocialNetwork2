import React from "react";
import s from './Profile.module.css'
import {MyPost} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType, RootStateType} from "../../redux/state";



type ProfileType = {
    profilePage: ProfilePageType
    addPost: ()=>void
    updateNewPostText: (value: string)=>void
    newPostsText:string

}

export const Profile = (props: ProfileType) => {

    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPost posts={props.profilePage}
                    addPost={props.addPost}
                    newPostsText={props.profilePage.newPostsText} updateNewPostText={props.updateNewPostText}/>
        </div>)
}
