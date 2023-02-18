import React from 'react';
import navbar from './Navbar.module.css'
import {NavLink} from "react-router-dom";

export function Navbar () {
    return (
        <nav className={navbar.nav}>
            <div className={`${navbar.item}${navbar.active}`}>
                <NavLink to='/profile'>Profile</NavLink>
            </div>
            <div className={`${navbar.item}${navbar.active}`}>
                <NavLink to='messages'>Messages</NavLink>
            </div>
            <div className={`${navbar.item}${navbar.active}`}>
                <NavLink to='news'>News</NavLink>
            </div>
            <div className={`${navbar.item}${navbar.active}`}>
                <NavLink to='settings'>Settings</NavLink>
            </div>
            <div className={`${navbar.item}${navbar.active}`}>
                <NavLink to='music'>Music</NavLink>
            </div>
        </nav>
    )
}