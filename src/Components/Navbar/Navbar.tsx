import React from 'react';
import navbar from './Navbar.module.css'
import {NavLink} from "react-router-dom";

export function Navbar () {
    return (
        <nav className={navbar.nav}>
            <div className={navbar.item} >
                <NavLink to='/profile' activeClassName={navbar.active}>Profile</NavLink>
            </div>
            <div className={navbar.item}>
                <NavLink to='messages' activeClassName={navbar.active}>Messages</NavLink>
            </div>
            <div className={navbar.item}>
                <NavLink to='news' activeClassName={navbar.active}>News</NavLink>
            </div>
            <div className={navbar.item}>
                <NavLink to='settings' activeClassName={navbar.active}>Settings</NavLink>
            </div>
            <div className={navbar.item}>
                <NavLink to='music' activeClassName={navbar.active}>Music</NavLink>
            </div>
        </nav>
    )
}