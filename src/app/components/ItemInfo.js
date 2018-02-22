import React from 'react';

export default (image) => {
    const profileImage = (
        <img
            className="results__profile--image"
            src={image.user.profile_image.small}
            alt=""
        />);

    return (
        <div className="results__info">
            <div
                className="results__option"
            >
                <a href={image.links.html} className="link link--grey results__option--like">
                    {image.likes}
                </a>
                <a className="link link--grey results__option--download" href={image.links.download} download>
                    <span>
                        Download
                    </span>
                </a>
            </div>
            <div className="results__profile">
                <picture>
                    <a href={image.user.links.html}>
                        { profileImage }
                    </a>
                </picture>
                <span className="results__profile--name">
                    <a className="link" href={image.user.links.html}>
                        {image.user.first_name} {image.user.last_name}
                    </a>
                </span>
            </div>
        </div>
    );
};
