import React, {ChangeEvent, RefObject, useState} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogsItem/DialogItem";
import {Message} from "./Message/Message";
import {addDialogMessage, DialogsPageType} from "../../redux/state";

type DialogsType = {
    state: DialogsPageType
    updateNewDialogMesagge: (newText: string) => void
    addDialogMessage: () => void

}
export const Dialogs = (props: DialogsType) => {

    let dialogsElements = props.state.dialogs.map(el => <DialogItem name={el.name} id={el.id} img={el.img}/>)
    let messagesElements = props.state.messages.map(m => <Message id={m.id} message={m.message}/>)



const addMessageDialog = (e: ChangeEvent<HTMLTextAreaElement>)=>  props.updateNewDialogMesagge(e.currentTarget.value)
const addMessage = ()=> props.addDialogMessage()


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}


            </div>

            <div className={s.messages}>
                {messagesElements}
                {/*<div>{text}</div>*/}
                <textarea value={props.state.newDialogMessage} onChange={addMessageDialog} ></textarea>
                <button onClick={addMessage}>addMessage</button>
            </div>

        </div>
    );
};

