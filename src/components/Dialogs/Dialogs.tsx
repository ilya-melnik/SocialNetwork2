import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogsItem/DialogItem";
import {Message} from "./Message/Message";


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
    let dialogsElements = dialogsItemData.map(el => <DialogItem name={el.name} id={el.id}/>)
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

