// @flow

// Utilities
import React from 'react';

// Components
import InfoOptions from './InfoOptions';
import ProfileImage from './ProfileImage';

type PropsType = {
    info: {
        user: {
            profile_image: {
                small: string
            },
            links: {
                html: string
            },
            first_name: string,
            last_name: string,
        }
    }
}

const ItemInfo = (props: PropsType) => {

    return (
        <div className="results__info">
            <InfoOptions info={props.info} />
            <div className="results__profile">
                <picture>
                    <a href={props.info.user.links.html}>
                        <ProfileImage info={props.info} />
                    </a>
                </picture>
                <span className="results__profile--name">
                    <a className="link" href={props.info.user.links.html}>
                        {props.info.user.first_name} {props.info.user.last_name}
                    </a>
                </span>
            </div>
        </div>
    );
};

export default ItemInfo;
