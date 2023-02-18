import React from 'react';
import myposts from "./MyPosts.module.css";
import {Post} from "./Post/Post";

export function MyPosts () {

    let postData = [
        {
            id: 1,
            message: 'Hey He',
            likeCount: 12
        },
        {
            id: 2,
            message: 'Hey Hey friends',
            likeCount: 10
        }
    ]
    const postHandler = postData.map( p =>  <Post message={p.message} likesCount={p.likeCount}/> )

    return (
        <div className={myposts.myposts}>
            <textarea></textarea>
            <button>Отправить</button>
            <div className={myposts.post}>
                { postHandler }
            </div>

        </div>
    )
}