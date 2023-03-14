import React from 'react';
import prof from './Profile.module.css'
import {ProfileItems} from "./ProfileItems/ProfileItems";
import {store} from "../../state/state";
import {MyPostsContainer} from "../container/MyPostsContainer";

export function Profile () {

    return (
        <div className={prof.content}>
            <ProfileItems/>
            <MyPostsContainer store={store}/>
        </div>
        )
}

/*profile={props.profile} message={props.message} addPost={props.addPost}*/