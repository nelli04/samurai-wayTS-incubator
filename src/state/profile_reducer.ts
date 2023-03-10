import {PostDataType} from "./state";

export const profileReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'ADD_POST':
            let newPost: PostDataType = {
                id: 5,
                message: state.newPostMessage,
                likeCount: 0
            }
            state.postData.push(newPost)
            state.newPostMessage = '';
            break;
        case 'UPDATE_NEW_POST_TEXT':
            state.newPostMessage = action.newText;
            break;
    }

    return state
}