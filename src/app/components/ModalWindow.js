import React from 'react';
import InfoOptions from './InfoOptions';
import ProfileImage from './ProfileImage';
import Icon from './base/Icon';

export default (props) => {
    return (
        <div className="js-modal modal">
            <div className="modal__content">
                <div className="modal__item">
                    <div className="modal__profile">
                        <div className="modal__info--profile">
                            <picture>
                                <a href={props.image.user.links.html}>
                                    <ProfileImage info={props.image} />
                                </a>
                            </picture>
                            <p className="text-left">
                                <a href={props.image.user.links.html} className="modal__info--link link link--grey">
                                    @{props.image.user.username}
                                </a>
                            </p>
                        </div>
                        <InfoOptions info={props.image} />
                    </div>
                    <figure className="modal__figure">
                        <picture>
                            <img className="modal__image" src={props.image.urls.regular} alt="Unsplash" />
                        </picture>
                        <figcaption className="modal__location">
                            {
                                props.image.user.location ?
                                    <Icon
                                        name="location"
                                        className="modal__location--icon"
                                    /> :
                                    null
                            }
                            {props.image.user.location}</figcaption>
                    </figure>
                </div>
            </div>
        </div>
    );
};
