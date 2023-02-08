import React from 'react';
import myposts from "./MyPosts.module.css";
import {Post} from "./Post/Post";

export function MyPosts () {
    return (
        <div className={myposts.myposts}>
            <textarea></textarea>
            <button>Отправить</button>
            <div className={myposts.post}>
                <Post message='Hey He'/>
                <Post message='Hey Hey friends'/>
            </div>

        </div>
    )
}