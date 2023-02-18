import React from 'react';
import m from './../DialogItem/DialogsItem.module.css'

type MessageType = {
    message: string
    id: number
}

export function Message(props: MessageType) {
    return (
        <div className={m.message}>
            {props.message}
        </div>
    )
}