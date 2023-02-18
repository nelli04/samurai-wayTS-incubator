import React from 'react';
import myPosts from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {DataType} from "../../../state/state";

export function MyPosts(props: DataType) {

    const postHandler = props.profile.postData.map(p => <Post message={p.message} likesCount={p.likeCount}/>)

    return (
        <div >
            <div className={myPosts.myposts}>
                <h3>My Posts</h3>
            </div>

            <div className={myPosts.text}>
                <textarea></textarea>
            </div>
            <div className={myPosts.button}>
                <button>Отправить</button>
            </div>

            <div className={myPosts.post}>
                {postHandler}
            </div>

        </div>
    )
}