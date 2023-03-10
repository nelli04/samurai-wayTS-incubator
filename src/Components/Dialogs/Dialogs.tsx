import React, {ChangeEvent, createRef} from 'react';
import {DialogItem} from "./DialogItem/DialogItem";
import dialog from "./DialogItem/DialogsItem.module.css";
import {Message} from "./Message/Message";
import {ActionsType, addDialogsAC, MessageStateType, ProfileStateType, updateNewDialogsAC} from "../Profile/state";

type DialogsType = {
    profile: ProfileStateType
    message: MessageStateType
    dispatch: (action: ActionsType) => void
}

export function Dialogs(props: DialogsType) {

    const mapDialogDataHandler = props.profile.dialogsData.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    const mapMessagesDataHandler = props.message.messagesData.map(m => <Message key={m.id} message={m.message} id={m.id}/>)

    // const dialogTextarea = createRef<HTMLTextAreaElement>()
    const onClickDialogHandler = () => {
        props.dispatch(addDialogsAC());
    }
    const onChangeTextareaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        debugger
        if (e.target) {
            let text = e.target.value;
            props.dispatch(updateNewDialogsAC(text));
        }

    }

    return (
        <div className={dialog.dialogs}>
            <div className={dialog.dialog_item}>
                {mapDialogDataHandler}
            </div>

            <div className={dialog.messages}>
                {mapMessagesDataHandler}
            </div>
            <div>
               <textarea
                   onChange={onChangeTextareaHandler}
                   value={props.message.newDialogMessage}
                   //ref={dialogTextarea}
                   className={dialog.textarea}
               />
                <button
                    onClick={onClickDialogHandler}
                    className={dialog.button}
                >Отправить
                </button>
            </div>
        </div>
    )
}