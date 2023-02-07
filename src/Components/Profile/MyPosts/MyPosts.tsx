import React from 'react';
import m from "./MyPosts.module.css";
import {Post} from "./Post/Post";


export function MyPosts () {
    return (
        <div className={m.myposts}>
            <textarea></textarea>
            <button>Отправить</button>
            <div className={m.post}>
                <Post message='Hey He'/>
                <Post message='Hey Hey friends'/>
            </div>

        </div>
    )
}