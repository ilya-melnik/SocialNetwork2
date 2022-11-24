import React from 'react';
import s from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";

type DialogsItemType = {
    id: number
    name: string
}
export const DialogItem = (props: DialogsItemType) => {
    let path = '/dialogs' + '/' + props.id
    return (

        <div className={s.dialog} >
            <NavLink to={path} activeClassName={s.active}>{props.name} </NavLink>
        </div>

    );
};

