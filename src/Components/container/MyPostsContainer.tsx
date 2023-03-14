import React from 'react';
import {ActionsType, addPostAC, ProfileStateType, StoreType, updateNewPostAC} from "../../state/state";
import {MyPosts} from "../Profile/MyPosts/MyPosts";

type MyPostsContainer = {
    store: StoreType
    // profile: ProfileStateType
    // dispatch: (action: ActionsType) => void
    // updateNewPostAC: (newText: string) => void
    // addPostAC: () => void
}

export function MyPostsContainer (props: MyPostsContainer) {

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