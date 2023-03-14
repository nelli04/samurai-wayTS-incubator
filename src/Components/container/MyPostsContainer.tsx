import React from 'react';
import {addPostAC, StoreType, updateNewPostAC} from "../../state/state";
import {MyPosts} from "../Profile/MyPosts/MyPosts";

type MyPostsContainerType = {
    store: StoreType
}

export function MyPostsContainer (props: MyPostsContainerType) {

    // const postHandler = props.profile.postData.map(p => <Post key={p.id} message={p.message} likesCount={p.likeCount}/>)
    // const newPostText = React.createRef<HTMLTextAreaElement>()
    const onClickButtonHandler = () => {
        props.store.dispatch(addPostAC())
    }
    const onChangeTextareaHandler = (newText: string) => {
        // if (newPostText.current) {
            //let text = newPostText.current.value
        //let action = updateNewPostAC(text)
            props.store.dispatch(updateNewPostAC(newText))

    }

    return (
        <div>
            <MyPosts profile={props.store._state.profile}
                     dispatch={props.store.dispatch}
                     updateNewPostAC={onChangeTextareaHandler}
                     addPostAC={onClickButtonHandler}
            />
        </div>
    )
}