export type DataType = {
    message: MessageStateType
    profile: ProfileStateType
    addPost: (text: string) => void
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
}
export type MessageStateType = {
    messagesData: MessagesDataType[]
}

export type newPost = {
    id: number,
    message: string
    likeCount: number

}

export const state: DataType = {
    profile: {
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
    addPost: () => {addPost('')}
}

export let addPost = (postMessage: string) => {
    let newPost: newPost = {
        id: new Date().getTime(),
        message: postMessage,
        likeCount: 0
    };
    state.profile.postData.push(newPost)
}