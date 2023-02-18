import React from 'react';
import {DialogItem} from "./DialogItem/DialogItem";
import dialog from "./DialogItem/DialogsItem.module.css";
import {Message} from "./Message/Message";
import {DataType} from "../../index";


export function Dialogs(props: DataType) {

    const mapDialogDataHandler = props.dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>)
    const mapMessagesDataHandler = props.messagesData.map(m => <Message message={m.message} id={m.id}/>)


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