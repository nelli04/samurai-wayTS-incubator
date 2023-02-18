import React from 'react';
import post from './Post.module.css'

export type MyPostType = {
    message: string
    likesCount: number
}

export function Post (props: MyPostType) {
    return (
        <div className={post.posts}>
            <img src='https://exploringbits.com/wp-content/uploads/2022/01/cat-pfp-5.jpg?ezimgfmt=rs:352x382/rscb3/ngcb3/notWebP' alt=''/>
            {props.message}
            <div>
                <span>Like {props.likesCount}</span>
            </div>
        </div>
    )
}