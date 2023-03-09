export type StoreType = {
    _state: DataType
    getState: () => void
    rerenderEntireTree: () => void
    subscribe: (observer: () => void) => void
}

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

export const store: StoreType = {
    _state: <DataType>  {
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
        addPost () {
            let newPost: PostDataType = {
                id: 5,
                message: this.profile.newPostMessage,
                likeCount: 0
            };
            this.profile.postData.push(newPost)
            this.profile.newPostMessage = ''
            store.rerenderEntireTree()
        },
        changeNewText (newText: string) {
            this.profile.newPostMessage = newText
            store.rerenderEntireTree()
        }
    },
    getState () {
        return this._state
    },
    rerenderEntireTree () {
        console.log('state')
    },
    subscribe (observer: () => void)  {
        this.rerenderEntireTree = observer
    },
}

// export const state: DataType = {
//     profile: {
//         newPostMessage: '',
//         postData: [
//             {
//                 id: 1,
//                 message: 'Hey He',
//                 likeCount: 12
//             },
//             {
//                 id: 2,
//                 message: 'Hey Hey friends',
//                 likeCount: 10
//             }
//         ],
//         dialogsData: [
//             {
//                 id: 'User1',
//                 name: 'User1'
//             },
//             {
//                 id: 'User2',
//                 name: 'User2'
//             },
//             {
//                 id: 'User3',
//                 name: 'User3'
//             },
//             {
//                 id: 'User4',
//                 name: 'User4'
//             },
//         ],
//     },
//     message: {
//         messagesData: [
//             {
//                 id: 1,
//                 message: 'Hello'
//             },
//             {
//                 id: 2,
//                 message: 'Hello'
//             },
//             {
//                 id: 3,
//                 message: 'Hello'
//             },
//             {
//                 id: 4,
//                 message: 'Hello'
//             },
//         ]
//     },
//     addPost: () => {
//         let newPost: PostDataType = {
//             id: 5,
//             message: state.profile.newPostMessage,
//             likeCount: 0
//         };
//         state.profile.postData.push(newPost)
//         state.profile.newPostMessage = ''
//         rerenderEntireTree()
//     },
//     changeNewText: (newText: string) => {
//         state.profile.newPostMessage = newText
//         rerenderEntireTree()
//     },
// }


