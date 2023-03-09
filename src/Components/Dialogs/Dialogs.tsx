import React from 'react';
import {DialogItem} from "./DialogItem/DialogItem";
import dialog from "./DialogItem/DialogsItem.module.css";
import {Message} from "./Message/Message";
import {DataType} from "../Profile/state";


export function Dialogs(props: DataType) {
    debugger;
    const mapDialogDataHandler = props.profile.dialogsData.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    const mapMessagesDataHandler = props.message.messagesData.map(m => <Message key={m.id} message={m.message} id={m.id}/>)


    debugger;

    return (
        <div className={dialog.dialogs}>
            <div className={dialog.dialog_item}>
                {mapDialogDataHandler}
            </div>
            <div className={dialog.messages}>
                {mapMessagesDataHandler}
            </div>
        </div>
    )
}