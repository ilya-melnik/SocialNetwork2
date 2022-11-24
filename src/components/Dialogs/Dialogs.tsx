import React from 'react';
import s from './Dialogs.module.css'
import {DialogsItem} from "./DialogsItem";

type MessageType = {
    id: number
    message: string
}
const Message = (props: MessageType) => {
    return <div className={s.message}>{props.message}</div>
}


export const Dialogs = () => {
    const dialogsItemData = [
        {id: 1, name: 'Nina'},
        {id: 2, name: 'Vova'},
        {id: 3, name: 'Ilya'},
        {id: 4, name: 'Vlad'},
    ]
    const messageData = [
        {id: 1, message: 'Hello everyone !'},
        {id: 2, message: 'How are you ?'},
        {id: 3, message: 'Hello !!!'},

    ]
    let dialogsElements = dialogsItemData.map(el => <DialogsItem name={el.name} id={el.id}/>)
    let messagesElements = messageData.map(m => <Message id={m.id} message={m.message}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>

                {dialogsElements}

            </div>

            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
};

