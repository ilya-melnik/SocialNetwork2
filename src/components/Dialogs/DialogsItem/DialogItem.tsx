import React from 'react';
import s from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";
import {DialogItemType} from "../../../redux/state";

type DialogsItemType = DialogItemType & {}

export const DialogItem = (props: DialogsItemType) => {
    let path = '/dialogs' + '/' + props.id
    return (

        <div className={s.dialog} >
            <div className={s.imgUser} ><img  src={props.img} alt=""/></div>
            <NavLink to={path} activeClassName={s.active}>{props.name} </NavLink>
        </div>

    );
};

