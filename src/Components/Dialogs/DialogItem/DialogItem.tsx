import dialog from './DialogsItem.module.css'
import {NavLink} from "react-router-dom";
import React from "react";

export type DialogItemType = {
    name: string
    id: string
}

export function DialogItem(props: DialogItemType) {
    let path = "/dialogs/" + props.id;
    return (
            <div className={dialog.item + ' ' + dialog.active}>
                <NavLink to={path}>{props.name}</NavLink>
            </div>
    )
}