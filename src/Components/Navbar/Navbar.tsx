import React from 'react';
import n from './Navbar.module.css'

export function Navbar () {
    return (
        <nav className={n.nav}>
            <div className={n.item}>
                <a href='/profile'>Profile</a>
            </div>
            <div className={n.item}>
                <a href='messages'>Messages</a>
            </div>
            <div className={n.item}>
                <a>News</a>
            </div>
            <div className={n.item}>
                <a>Settings</a>
            </div>
        </nav>
    )
}