import React, {RefObject, useState} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogsItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPageType} from "../../redux/state";

type DialogsType = {
    state: DialogsPageType
}
export const Dialogs = (props: DialogsType) => {

    let dialogsElements = props.state.dialogs.map(el => <DialogItem name={el.name} id={el.id} img={el.img}/>)
    let messagesElements = props.state.messages.map(m => <Message id={m.id} message={m.message}/>)


    const newPostElement = React.createRef<HTMLTextAreaElement>();
    let [ text, valueState] = useState<string | undefined>('')
    const addMessage = () =>  valueState(newPostElement.current?.value)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}


            </div>

            <div className={s.messages}>
                {messagesElements}
                <div>{text}</div>
                <textarea ref={newPostElement}></textarea>
                <button onClick={addMessage}>addMessage</button>
            </div>

        </div>
    );
};

