import React from 'react';
import InfoOptions from './InfoOptions';

export default function ItemInfo(props) {
    const profileImage = (
        <img
            className="results__profile--image"
            src={props.info.user.profile_image.small}
            alt=""
        />);

    return (
        <div className="results__info">
            <InfoOptions info={props.info} />
            <div className="results__profile">
                <picture>
                    <a href={props.info.user.links.html}>
                        { profileImage }
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
}
