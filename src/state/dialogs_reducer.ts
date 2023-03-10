export const dialogsReducer = (state: any, action: any) => {
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