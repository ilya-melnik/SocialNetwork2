import React from 'react';
import s from './Dialogs.module.css'
import {DialogsItem} from "./DialogsItem";

type MessageType = {
    message: string
}
const Message = (props: MessageType) => {
    return <div className={s.message}>{props.message}</div>
}

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>

                <DialogsItem name={'Nina'} id={1}/>
                <DialogsItem name={'Vova'} id={2}/>
                <DialogsItem name={'Ilya'} id={3}/>
                <DialogsItem name={'Vlad'} id={4}/>


            </div>

            <div className={s.messages}>
                <Message message={'Hello everyone !'}/>
                <Message message={'How are you ?'}/>
                <Message message={'How are you ?'}/>
            </div>
        </div>
    );
};

