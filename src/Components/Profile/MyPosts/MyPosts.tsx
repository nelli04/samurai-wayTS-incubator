import React from 'react';
import myposts from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {DataType} from "../../../index";

export function MyPosts(props: DataType) {

    const postHandler = props.postData.map(p => <Post message={p.message} likesCount={p.likeCount}/>)

    return (
        <div className={myposts.myposts}>
            <textarea></textarea>
            <button>Отправить</button>
            <div className={myposts.post}>
                {postHandler}
            </div>

        </div>
    )
}