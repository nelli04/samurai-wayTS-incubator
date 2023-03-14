import React from 'react';
import {
    addDialogsAC,
    StoreType,
    updateNewDialogsAC
} from "../../state/state";
import {Dialogs} from "../Dialogs/Dialogs";

type DialogsContainerType = {
    store: StoreType
}

export function DialogsContainer(props: DialogsContainerType) {

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