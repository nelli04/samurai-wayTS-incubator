import React from 'react';
import {addPostAC, updateNewPostAC} from "../../state/state";
import {MyPosts} from "../Profile/MyPosts/MyPosts";
import {StoreContext} from "../../StoreContext";

export function MyPostsContainer() {

    return (
        <StoreContext.Consumer>
            {store => {

                const onClickButtonHandler = () => {
                    store.dispatch(addPostAC())
                }
                const onChangeTextareaHandler = (newText: string) => {
                    store.dispatch(updateNewPostAC(newText))

                }
                return (
                    <MyPosts profile={store._state.profile}
                             dispatch={store.dispatch}
                             updateNewPostAC={onChangeTextareaHandler}
                             addPostAC={onClickButtonHandler}
                    />)
            }
            }
        </StoreContext.Consumer>
    )
}