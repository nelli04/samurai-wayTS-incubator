import React, {ChangeEvent} from 'react';
import {
    ActionsType,
    addDialogsAC,
    MessageStateType,
    ProfileStateType,
    StoreType,
    updateNewDialogsAC
} from "../../state/state";
import {DialogItem} from "../Dialogs/DialogItem/DialogItem";
import {Message} from "../Dialogs/Message/Message";
import {Dialogs} from "../Dialogs/Dialogs";

type DialogsContainerType = {
    store: StoreType
    // profile: ProfileStateType
    // message: MessageStateType
    // dispatch: (action: ActionsType) => void
}

export function DialogsContainer(props: DialogsContainerType) {

    // const mapDialogDataHandler = props.store._state.profile.dialogsData.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    // const mapMessagesDataHandler = props.store._state.message.messagesData.map(m => <Message key={m.id} message={m.message}
    //                                                                             id={m.id}/>)

    const onClickDialogHandler = () => {
        props.store.dispatch(addDialogsAC());
    }
    const onChangeTextareaHandler = (send: string) => {
            props.store.dispatch(updateNewDialogsAC(send))
    }

    return (
        <div>
            <Dialogs message={props.store._state.message}
                     profile={props.store._state.profile}
                     dispatch={props.store._state.dispatch}
                     addDialogsAC={onClickDialogHandler}
                     updateNewDialogsAC={onChangeTextareaHandler}
            />
        </div>
    )
}