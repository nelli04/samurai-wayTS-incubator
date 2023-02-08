import dialog from './DialogsItem.module.css'
import {NavLink} from "react-router-dom";
import React from "react";

export function DialogItem () {
    return (
        <div className={dialog.dialogs}>
            <div className={dialog.dialog_item}>
                <div className={dialog.item + ' ' + dialog.active}>
                    <NavLink to='/dialogs/User1'>User1</NavLink>
                </div>
                <div className={dialog.item + ' ' + dialog.active}>
                    <NavLink to='/dialogs/User2'>User2</NavLink>
                </div>
                <div className={dialog.item + ' ' + dialog.active}>
                    <NavLink to='/dialogs/User3'>User3</NavLink>
                </div>
                <div className={dialog.item + ' ' + dialog.active}>
                    <NavLink to='/dialogs/User4'>User4</NavLink>
                </div>
            </div>
            <div className={dialog.messages}>
                <div className={dialog.message}>Hello</div>
                <div className={dialog.message}>Hello</div>
                <div className={dialog.message}>Hello</div>
                <div className={dialog.message}>Hello</div>
            </div>
        </div>
    )
}