import React from 'react';
import prof from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileItems} from "./ProfileItems/ProfileItems";
import {DataType} from "./state";


export function Profile (props: DataType) {
    return (
        <div className={prof.content}>
            <ProfileItems/>
            <MyPosts profile={props.profile} message={props.message}/>
        </div>
        )
}