import React from 'react';
import prof from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileItems} from "./ProfileItems/ProfileItems";
import {DataType} from "../../state/state";


export function Profile (props: DataType) {

    return (
        <div className={prof.content}>
            <ProfileItems/>
            <MyPosts dispatch={props.dispatch}
                     profile={props.profile}
                     message={props.message}
                     friends={props.friends}
            />
        </div>
        )
}

/*profile={props.profile} message={props.message} addPost={props.addPost}*/