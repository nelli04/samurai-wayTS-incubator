import React from 'react';
import prof from './Profile.module.css'
import {ProfileItems} from "./ProfileItems/ProfileItems";
import {MyPostsContainer} from "../container/MyPostsContainer";

export function Profile () {

    return (
        <div className={prof.content}>
            <ProfileItems/>
            <MyPostsContainer/>
        </div>
        )
}