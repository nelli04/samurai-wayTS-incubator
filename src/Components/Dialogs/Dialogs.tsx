import React from 'react';
import {DialogItem} from "./DialogItem/DialogItem";
import dialog from "./DialogItem/DialogsItem.module.css";
import {Message} from "./Message/Message";

export function Dialogs() {
    return (
        <div className={dialog.dialogs}>
            <div className={dialog.dialog_item}>
                <DialogItem name = 'User1' id='User1'/>
                <DialogItem name = 'User2' id='User2'/>
                <DialogItem name = 'User3' id='User3'/>
                <DialogItem name = 'User4' id='User4'/>
            </div>
            <div className={dialog.messages}>
                <Message message='Hello'/>
                <Message message='Hello'/>
                <Message message='Hello'/>
                <Message message='Hello'/>
            </div>
        </div>
    )
}

