import React from 'react';
import prof from './Profile.module.css'
import {ProfileItems} from "./ProfileItems/ProfileItems";
import {ActionsType, ProfileStateType, store, StoreType} from "../../state/state";
import {MyPostsContainer} from "../container/MyPostsContainer";

type ProfileType = {
    store: StoreType
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