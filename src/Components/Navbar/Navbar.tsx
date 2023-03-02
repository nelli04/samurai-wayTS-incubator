import React from 'react';
import navbar from './Navbar.module.css'
import {NavLink} from "react-router-dom";

export function Navbar () {
    return (
        <nav className={navbar.nav}>
            <div className={`${navbar.item}${navbar.active}`}>
                <NavLink to='/profile'>Профиль</NavLink>
            </div>
            <div className={`${navbar.item}${navbar.active}`}>
                <NavLink to='messages'>Сообщения</NavLink>
            </div>
            <div className={`${navbar.item}${navbar.active}`}>
                <NavLink to='news'>Новости</NavLink>
            </div>
            <div className={`${navbar.item}${navbar.active}`}>
                <NavLink to='/friends'>Друзья</NavLink>
            </div>
            <div className={`${navbar.item}${navbar.active}`}>
                <NavLink to='music'>Музыка</NavLink>
            </div>
            <hr/>
            <div className={`${navbar.item}${navbar.active}`}>
                <NavLink to='settings'>Settings</NavLink>
            </div>
        </nav>
    )
}