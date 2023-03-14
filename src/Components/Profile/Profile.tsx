import React from 'react';
import prof from './Profile.module.css'
import {ProfileItems} from "./ProfileItems/ProfileItems";
import {ActionsType, ProfileStateType, store} from "../../state/state";
import {MyPostsContainer} from "../container/MyPostsContainer";

type ProfileType = {
    profile: ProfileStateType
    dispatch: (action: ActionsType) => void
    updateNewPostAC: (newText: string) => void
    addPostAC: () => void
}

export function Profile (props: ProfileType) {

    return (
        <div className={prof.content}>
            <ProfileItems/>
            <MyPostsContainer store={store}/>
        </div>
        )
}

/*profile={props.profile} message={props.message} addPost={props.addPost}*/