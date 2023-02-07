import React from 'react';
import post from './Post.module.css'

export type MyPostType = {
    message: string
}

export function Post (props: MyPostType) {
    return (
        <div className={post.posts}>
            <img src='https://avatars.mds.yandex.net/i?id=4cfbdb5c98a12458f25381de8511e083dbcea430-8254957-images-thumbs&n=13'/>
            {props.message}
            <div>
                <span>Like</span>
            </div>
        </div>
    )
}