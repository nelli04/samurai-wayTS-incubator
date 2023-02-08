import React from 'react';
import prof from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileItems} from "./ProfileItems/ProfileItems";

export function Profile () {
    return (
        <div className={prof.content}>
            <ProfileItems/>
            <MyPosts/>
        </div>
    )
}