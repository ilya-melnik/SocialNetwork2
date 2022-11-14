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
        {id:1, name: 'Nina'},
        {id:2, name: 'Vova'},
        {id:3, name: 'Ilya'},
        {id:4, name: 'Vlad'},
    ]
    const messageData = [
        {id:1, message:'Hello everyone !'},
        {id:2, message:'How are you ?'},
        {id:3, message:'Hello !!!'},

    ]
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>

                <DialogsItem name={dialogsItemData[0].name} id={dialogsItemData[0].id}/>
                <DialogsItem name={dialogsItemData[1].name} id={dialogsItemData[1].id}/>
                <DialogsItem name={dialogsItemData[2].name} id={dialogsItemData[2].id}/>
                <DialogsItem name={dialogsItemData[3].name} id={dialogsItemData[3].id}/>


            </div>

            <div className={s.messages}>
                <Message id={messageData[0].id} message={messageData[0].message}/>
                <Message id={messageData[1].id} message={messageData[1].message}/>
                <Message id={messageData[2].id} message={messageData[2].message}/>
            </div>
        </div>
    );
};

