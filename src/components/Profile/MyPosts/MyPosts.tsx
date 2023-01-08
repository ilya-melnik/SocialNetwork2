import React, {ChangeEvent, RefObject} from "react";
import {Post} from "./Post/Post";
import s from './MyPosts.module.css'
import {FunctionType, PostType, ProfilePageType} from "../../../redux/state";


type MyPostsType = {
    posts: ProfilePageType
    addPost: ()=>void
    newPostsText: string
    updateNewPostText: (value: string)=>void
}
export const MyPost = (props: MyPostsType) => {
    let postsElements = props.posts.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)
    const newPostElement:RefObject<HTMLTextAreaElement> = React.createRef();

    const addText = () => {

            props.addPost()
            props.updateNewPostText('')



        // textValue? props.addPost(textValue):''
        // newPostElement.current?.value = ''
       }

       const getCurrentValue = () => {
           let textValue = newPostElement.current?.value
props.updateNewPostText(textValue?textValue:'')
       }
    return (
        <div className={s.postBlock}>
            <h3>My post</h3>
            <div>
                <div><textarea ref={newPostElement} value={props.newPostsText}  onChange={getCurrentValue}></textarea></div>
                <div>
                    <button onClick={addText}>Add post</button>
                </div>


            </div>
            <div className={s.posts}>
                {postsElements}
            </div>

        </div>


    )
}
