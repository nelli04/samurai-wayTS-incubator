import React from 'react';
import s from './Friend.module.css'

export type FriendsType = {
    name: string
    id: number
    url: string
}

export const Friends = (p: FriendsType) => {
    return (
        <div className={s.boss}>
            <div>
                Nick
                {p.id + p.id + p.url}
            </div>
            <div>
                {p.id + p.id + p.url}
                Alex
            </div>
            <div>
                {p.id + p.id + p.url}
                Boss
            </div>

        </div>
    );
};

