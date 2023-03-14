
let initialStateDialog = {
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
    }

export const dialogsReducer = (state = initialStateDialog, action: any) => {
    switch (action.type) {
        case 'UPDATE_NEW_DIALOGS':
            state.newDialogMessage = action.send;
            break;
        case 'ADD_DIALOGS':
            let send = state.newDialogMessage;
            state.newDialogMessage = '';
            state.messagesData.push({id: 6, message: send})
            break;
    }
    return state
}