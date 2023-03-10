import React from 'react';
import myPosts from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {addPostAC, DataType, updateNewPostAC} from "../../../state/state";


export function MyPosts(props: DataType) {

    const postHandler = props.profile.postData.map(p => <Post key={p.id} message={p.message} likesCount={p.likeCount}/>)
    const newPostText = React.createRef<HTMLTextAreaElement>()
    const onClickButtonHandler = () => {
            props.dispatch(addPostAC())
    }
    const onChangeTextareaHandler = () => {
        if (newPostText.current) {
            let text = newPostText.current.value
            props.dispatch(updateNewPostAC(text))
        }
    }

    return (
        <div>
            <div className={myPosts.my_posts}>
                <h3>My Posts</h3>
            </div>

            <div className={myPosts.text}>
                <textarea
                    ref={newPostText}
                    onChange={onChangeTextareaHandler}
                    value={props.profile.newPostMessage}
                    className={myPosts.textarea}
                />
            </div>

            <div className={myPosts.button}>
                <button
                    className={myPosts.but}
                    onClick={onClickButtonHandler}>Отправить
                </button>
            </div>

            <div className={myPosts.post}>
                {postHandler}
            </div>

        </div>
    )
}