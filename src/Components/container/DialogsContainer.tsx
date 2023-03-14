import React from 'react';
import {addDialogsAC, store, updateNewDialogsAC} from "../../state/state";
import {Dialogs} from "../Dialogs/Dialogs";
import {StoreContext} from "../../StoreContext";


export function DialogsContainer() {

    return (
            <StoreContext.Consumer>
            { store => {
                const onClickDialogHandler = () => {
                store.dispatch(addDialogsAC());
            }
                const onChangeTextareaHandler = (send: string) => {
                    store.dispatch(updateNewDialogsAC(send))
                }
                    return <Dialogs message={store._state.message}
                                    profile={store._state.profile}
                                    dispatch={store._state.dispatch}
                                    addDialogsAC={onClickDialogHandler}
                                    updateNewDialogsAC={onChangeTextareaHandler}
                    />
                }

            }

        </StoreContext.Consumer>
    )
}