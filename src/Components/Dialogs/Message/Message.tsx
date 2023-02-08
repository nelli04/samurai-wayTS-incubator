import React from 'react';
import m from './../DialogItem/DialogsItem.module.css'

type MessageType = {
    message: string
}

export function Message(props: MessageType) {
    return (
        <div className={m.message}>
            {props.message}
        </div>
    )
}