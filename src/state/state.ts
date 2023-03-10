export type StoreType = {
    _state: DataType
    getState: () => void
    _rerenderEntireTree: (_state: DataType) => void
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionsType) => void
}

export type DataType = {
    message: MessageStateType
    profile: ProfileStateType
    friends: FriendsStateType
    dispatch: (action: ActionsType) => void
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
export type FriendsDataType = {
    id: number
    name: string
    url: string
}

export type FriendsStateType = {
    friend: FriendsDataType[]
}
export type ProfileStateType = {
    postData: PostDataType[]
    dialogsData: DialogsDataType[]
    newPostMessage: string
}
export type MessageStateType = {
    messagesData: MessagesDataType[]
    newDialogMessage: string
}

export type ActionsType =
      ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostAC>
    | ReturnType<typeof updateNewDialogsAC>
    | ReturnType<typeof addDialogsAC>

export const store: StoreType = {
    _state: <DataType>{
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
            newDialogMessage: '',
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
        friends: {
            friend: [
                {id: 1, name: 'Boss', url: 'https://live.staticflickr.com/7151/6760135001_58b1c5c5f0_b.jpg'},
                {id: 1, name: 'Nick', url: 'https://www.esafety.gov.au/sites/default/files/2019-08/Remove%20images%20and%20video.jpg'},
                {id: 1, name: 'Git', url: 'https://media1.popsugar-assets.com/files/thumbor/rqrH_e6UUncDFPoF9Rp8aUwGNaA/1126x0:2714x1588/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/12/06/832/n/44498184/4a11b5145deaa4f27e6ba1.42001155_/i/baby-yoda-pictures.jpg'},
            ]
        }
    },
    getState() {
        return this._state
    },
    _rerenderEntireTree() {
        console.log('state')
    },
    subscribe(observer: () => void) {
        this._rerenderEntireTree = observer
    },
    dispatch(action) {
        debugger;
        if (action.type === 'ADD_POST') {
            let newPost: PostDataType = {
                id: 5,
                message: this._state.profile.newPostMessage,
                likeCount: 0
            }
            this._state.profile.postData.push(newPost)
            this._state.profile.newPostMessage = '';
            store._rerenderEntireTree(this._state)
        } else if (action.type === 'UPDATE_NEW_POST_TEXT') {
            this._state.profile.newPostMessage = action.newText;
            this._rerenderEntireTree(this._state)
        } else if (action.type === 'UPDATE_NEW_DIALOGS') {
            this._state.message.newDialogMessage = action.send;
            this._rerenderEntireTree(this._state)
        } else if (action.type === 'ADD_DIALOGS') {
            let send = this._state.message.newDialogMessage;
            this._state.message.newDialogMessage = '';
            this._state.message.messagesData.push({id: 6, message: send})
            this._rerenderEntireTree(this._state)
        }
    }
}

export const addPostAC = () => {
    return {
        type: "ADD_POST",
    } as const

}
export const updateNewPostAC = (newText: string) => {
    return {
        type: 'UPDATE_NEW_POST_TEXT',
        newText: newText
    } as const
}
export const updateNewDialogsAC = (send: string) => {
    return {
        type: 'UPDATE_NEW_DIALOGS',
        send: send
    } as const
}
export const addDialogsAC = () => {
    return {
        type: 'ADD_DIALOGS'
    } as const
}


