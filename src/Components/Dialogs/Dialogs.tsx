import React from 'react';
import {DialogItem} from "./DialogItem/DialogItem";
import dialog from "./DialogItem/DialogsItem.module.css";
import {Message} from "./Message/Message";
import {DataType} from "../../state/state";


export function Dialogs(props: DataType) {

    const mapDialogDataHandler = props.profile.dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>)
    const mapMessagesDataHandler = props.message.messagesData.map(m => <Message message={m.message} id={m.id}/>)


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