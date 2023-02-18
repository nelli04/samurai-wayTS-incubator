import React from 'react';
import {DialogItem} from "./DialogItem/DialogItem";
import dialog from "./DialogItem/DialogsItem.module.css";
import {Message} from "./Message/Message";

export function Dialogs() {

    let dialogsData = [
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
    ]
    let messagesData = [
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
    const mapDialogDataHandler = dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>)
    const  mapMessagesDataHandler = messagesData.map(m => <Message message={m.message} id={m.id}/>)

    debugger;

    return (
        <div className={dialog.dialogs}>
            <div className={dialog.dialog_item}>
                { mapDialogDataHandler }
            </div>
            <div className={dialog.messages}>
                { mapMessagesDataHandler }
            </div>
        </div>
    )
}