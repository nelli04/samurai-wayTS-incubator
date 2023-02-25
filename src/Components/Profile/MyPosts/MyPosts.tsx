import React from 'react';
import myPosts from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {DataType} from "../state";

export function MyPosts(props: DataType) {

    const postHandler = props.profile.postData.map(p => <Post message={p.message} likesCount={p.likeCount}/>)
    const newPostElement = React.createRef<HTMLTextAreaElement>()
    const onClickButtonHandler = () => {
        let text = newPostElement.current?.value
    }

    return (
        <div>
            <div className={myPosts.myposts}>
                <h3>My Posts</h3>
            </div>

            <div className={myPosts.text}>
                <textarea ref={newPostElement}></textarea>
            </div>
            <div className={myPosts.button}>
                <button onClick={onClickButtonHandler}>Отправить</button>
            </div>

            <div className={myPosts.post}>
                {postHandler}
            </div>

        </div>
    )
}