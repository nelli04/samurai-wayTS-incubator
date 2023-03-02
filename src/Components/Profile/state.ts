import {rerenderEntireTree} from "../../render";

export type DataType = {
    message: MessageStateType
    profile: ProfileStateType
    addPost: (postMessage: string) => void
    changeNewText: (newText: string) => void
}

export type DialogsDataType = {
    id: string
    name: string
}
export type MessagesDataType = {
    id: number
    message: string
}
export type PostDataType = {
    id: number
    message: string
    likeCount: number
}

export type ProfileStateType = {
    postData: PostDataType[]
    dialogsData: DialogsDataType[]
    newPostMessage: string
}
export type MessageStateType = {
    messagesData: MessagesDataType[]
}

/*export type newPost = {
    id: number,
    message: string
    likeCount: number

}*/

export const state: DataType = {
    profile: {
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
    },
    message: {
        messagesData: [
            {
                id: 1,
                message: 'Hello'
            },
            {
                id: 2,
                message: 'Hello'
            },
            {
                id: 3,
                message: 'Hello'
            },
            {
                id: 4,
                message: 'Hello'
            },
        ]
    },
    addPost: (postMessage: string) => {
        let newPost: PostDataType = {
            id: 5,
            message: postMessage,
            likeCount: 0
        };
        state.profile.postData.push(newPost)
        rerenderEntireTree(state)
    },
    changeNewText: (newText: string) => {
        state.profile.newPostMessage = newText
        rerenderEntireTree(state)
    }
}


