import React from 'react';
import {Friends} from "./Friends";
import {FriendsStateType} from "../../../state/state";

type FriendType = {
    friends: FriendsStateType
}


export const Friend = (p: FriendType) => {

    return (
        <div>
            {p.friends.friend.map(f => <Friends name={f.name} url={f.url}/>)}
        </div>
    );
};

