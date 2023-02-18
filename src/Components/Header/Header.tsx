import React from 'react';
import head from './Header.module.css'

export const Header = () => {
    return (
        <header className={head.header}>
            <img
                src='https://static.vecteezy.com/system/resources/previews/004/887/156/original/ab-ab-letter-design-logo-logotype-icon-concept-with-serif-font-and-classic-elegant-style-look-vector.jpg'
                alt=''/>
        </header>
    );
}