import React from 'react';
import prof from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";



export function Profile () {
    return (
        <div className={prof.content}>
            <img
                src='https://fotorelax.ru/wp-content/uploads/2016/02/Beautiful-photos-and-pictures-on-different-topics-05.jpg'/>
            <MyPosts/>
        </div>
    )
}