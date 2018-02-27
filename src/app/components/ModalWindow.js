import React, { Component } from 'react';
import InfoOptions from './InfoOptions';
import ProfileImage from './ProfileImage';
import Icon from './base/Icon';

export default class ModalWindow extends Component {

    componentDidMount = () => {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount = () => {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    setWrapperRef = (node) => {
        this.wrapperRef = node;
    }

    handleClickOutside = (event) => {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.props.handleClickOutside();
        }
    }

    render() {
        return (
            <div className="js-modal modal">
                <div
                    className="modal__content"
                    ref={this.setWrapperRef}
                >
                    <div className="modal__item">
                        <div className="modal__profile">
                            <div className="modal__info--profile">
                                <picture>
                                    <a href={this.props.image.user.links.html}>
                                        <ProfileImage info={this.props.image} />
                                    </a>
                                </picture>
                                <p className="text-left">
                                    <a href={this.props.image.user.links.html} className="modal__info--link link link--grey">
                                        @{this.props.image.user.username}
                                    </a>
                                </p>
                            </div>
                            <InfoOptions info={this.props.image} />
                        </div>
                        <figure className="modal__figure">
                            <picture>
                                <img className="modal__image" src={this.props.image.urls.regular} alt="Unsplash" />
                            </picture>
                            <figcaption className="modal__location">
                                {
                                    this.props.image.user.location ?
                                        <Icon
                                            name="location"
                                            className="modal__location--icon"
                                        /> :
                                        null
                                }
                                {this.props.image.user.location}
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        );
    }
}
