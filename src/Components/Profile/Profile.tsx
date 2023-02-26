import React from 'react';
import prof from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileItems} from "./ProfileItems/ProfileItems";
import {DataType, ProfileStateType} from "./state";

export type ProfileType = {
    profile: ProfileStateType[]
}

export function Profile (props: DataType) {

    return (
        <div className={prof.content}>
            <ProfileItems/>
            <MyPosts addPost={props.addPost} profile={props.profile} message={props.message}/>
        </div>
        )
}

/*profile={props.profile} message={props.message} addPost={props.addPost}*/