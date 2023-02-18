import React from 'react';
import propfileItem from './ProfileItems.module.css'

export function ProfileItems() {
    return (
        <div>
            <div className={propfileItem.container}>
                <img className={propfileItem.img}
                     src='https://img.freepik.com/premium-vector/doodle-face-avatar-for-social-media-line-art-people-face-isolated-on-white-background_559729-359.jpg'
                     alt=''/>
                <div className={propfileItem.overlay}>
                    @username
                </div>
            </div>
            <div className={propfileItem.ava}>
                @username
            </div>
        </div>


    )
}