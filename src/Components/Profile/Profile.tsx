import React from 'react';
import p from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";



export function Profile () {
    return (
        <div className={p.content}>
            <img
                src='https://fotorelax.ru/wp-content/uploads/2016/02/Beautiful-photos-and-pictures-on-different-topics-05.jpg'/>
            <MyPosts/>
        </div>
    )
}