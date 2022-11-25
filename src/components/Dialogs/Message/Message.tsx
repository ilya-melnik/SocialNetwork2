import React from 'react';
import s from './Message.module.css'
import {MessageType} from "../../../redux/state";


type LocalMessageType = MessageType & { }
export const Message = (props: LocalMessageType) => {
    return <div className={s.message}>{props.message}</div>
}



