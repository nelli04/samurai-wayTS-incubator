export type StoreType = {
    _state: DataType
    getState: () => void
    rerenderEntireTree: () => void
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionsType) => void
}

export type DataType = {
    message: MessageStateType
    profile: ProfileStateType
    dispatch: (action: ActionsType) => void
    // _addPost: (/*postMessage: string*/) => void
    // _changeNewText: (newText: string) => void
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

export type Add_Post_Type = {
    type: 'ADD_POST'
    newPosts: MessageStateType
}
export type Update_New_Post_Text_Type = {
    type: 'UPDATE_NEW_POST_TEXT'
    newText: string
}
export type ActionsType = Add_Post_Type | Update_New_Post_Text_Type

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
        // _addPost() {
        //
        // },
        // _changeNewText(newText: string) {
        //
        // },

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
    dispatch (action) {
        if(action.type === 'ADD_POST') {
            let newPost: PostDataType = {
                id: 5,
                message: this._state.profile.newPostMessage,
                likeCount: 0
            }
            this._state.profile.postData.push(newPost)
            this._state.profile.newPostMessage = ''
            store.rerenderEntireTree()
        } else if (action.type === 'UPDATE_NEW_POST_TEXT') {
            this._state.profile.newPostMessage = action.newText;
            store.rerenderEntireTree()
        }
    }
}


