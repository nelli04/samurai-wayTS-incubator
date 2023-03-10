import React from 'react';
import s from './Friend.module.css'

export type FriendsType = {
    name: string
}

export const Friends = (p: FriendsType) => {
    return (
        <div className={s.boss}>
            <div>
                {p.name}<img src='https://live.staticflickr.com/7151/6760135001_58b1c5c5f0_b.jpg'/>
            </div>
            {/*<div>*/}
            {/*    {p.name}<img src='https://www.esafety.gov.au/sites/default/files/2019-08/Remove%20images%20and%20video.jpg' alt=''/>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    {p.name}<img src='https://media1.popsugar-assets.com/files/thumbor/rqrH_e6UUncDFPoF9Rp8aUwGNaA/1126x0:2714x1588/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/12/06/832/n/44498184/4a11b5145deaa4f27e6ba1.42001155_/i/baby-yoda-pictures.jpg' alt=''/>*/}
            {/*</div>*/}

        </div>
    );
};

