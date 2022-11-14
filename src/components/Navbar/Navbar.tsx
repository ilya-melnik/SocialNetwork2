import React from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

export const Navbur = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item} >
                <NavLink to={'/profile'} activeClassName={s.active}>Profile</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to={'/dialogs'} activeClassName={s.active}> Message</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'news'} activeClassName={s.active}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'music'} activeClassName={s.active}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'settings'} activeClassName={s.active}>Settings</NavLink>
            </div>
        </nav>
    )
}

