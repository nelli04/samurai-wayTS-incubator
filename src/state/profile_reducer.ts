import {PostDataType} from "./state";

let initialStateProfile = {
        newPostMessage: '',
        postData: [
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
        ],
        dialogsData: [
            {
                id: 'User1',
                name: 'User1'
            },
            {
                id: 'User2',
                name: 'User2'
            },
            {
                id: 'User3',
                name: 'User3'
            },
            {
                id: 'User4',
                name: 'User4'
            },
        ],
    }

export const profileReducer = (state = initialStateProfile, action: any) => {
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