import React from 'react';
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

type DialogsItemType = {
    id: number
    name: string
}
export const DialogsItem = (props: DialogsItemType) => {
    let path = '/dialog' + '/' + props.id
    return (
        
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name} </NavLink>
        </div>

    );
};

