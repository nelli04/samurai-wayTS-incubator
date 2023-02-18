import React from 'react';
import prof from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileItems} from "./ProfileItems/ProfileItems";
import {dialogsData, messagesData, postData} from "../../index";

export function Profile () {
    return (
        <div className={prof.content}>
            <ProfileItems/>
            <MyPosts postData={postData} messagesData={messagesData} dialogsData={dialogsData}/>
        </div>
        )
}