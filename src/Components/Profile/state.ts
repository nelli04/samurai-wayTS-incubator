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


