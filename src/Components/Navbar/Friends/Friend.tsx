import React from 'react';
import {Friends} from "./Friends";
import {FriendsStateType} from "../../../state/state";

type FriendType = {
    friends: FriendsStateType
}


export const Friend = (p: FriendType) => {
    const infoFriend = p.friends.friend.map(f => <Friends name={f.name} id={f.id} url={f.url}/>)
    return (
        <div>
            {infoFriend}
        </div>
    );
};

