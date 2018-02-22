import React from 'react';

export default function ItemInfo(props) {
    const profileImage = (
        <img
            className="results__profile--image"
            src={props.info.user.profile_image.small}
            alt=""
        />);

    return (
        <div className="results__info">
            <div
                className="results__option"
            >
                <a href={props.info.links.html} className="link link--grey results__option--like">
                    {props.info.likes}
                </a>
                <a className="link link--grey results__option--download" href={props.info.links.download} download>
                    <span>
                        Download
                    </span>
                </a>
            </div>
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
