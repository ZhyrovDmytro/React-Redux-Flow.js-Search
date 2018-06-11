// @flow

// Utilities
import React, { Component } from 'react';

// Components
import InfoOptions from './InfoOptions';
import ProfileImage from './ProfileImage';
import Icon from './base/Icon';

type PropsType = {
    image: Object,
    user: Object,
    links: Object,
    urls: Object,
    html: string,
    small: string,
    username: string,
    location: string,
    regular: string,
    handleClickOutside: Function,
    wrapperRef: Element | null
}

export default class ModalWindow extends Component<PropsType> {
    componentDidMount = () => {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount = () => {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    setWrapperRef = (node?: Element | null) => {
        console.log(this.wrapperRef);
        this.wrapperRef = node;
    }

    wrapperRef = null;

    handleClickOutside = (event: MouseEvent) => {
        const target = event.target;
        if (target instanceof Node) {
            if (this.wrapperRef && !this.wrapperRef.contains(target)) {
                this.props.handleClickOutside();
            }
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
                                <div>
                                    <a href={this.props.image.user.links.html}>
                                        <ProfileImage info={this.props.image} />
                                    </a>
                                </div>
                                <p className="text-left">
                                    <a
                                        href={this.props.image.user.links.html}
                                        className="modal__info--link link link--grey"
                                    >
                                        @{this.props.image.user.username}
                                    </a>
                                </p>
                            </div>
                            <InfoOptions info={this.props.image} />
                        </div>
                        <figure className="modal__figure">
                            <picture>
                                <img
                                    className="modal__image"
                                    src={this.props.image.urls.regular}
                                    alt="Unsplash"
                                />
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

// ModalWindow.propTypes = {
//     image: PropTypes.PropTypes.shape({
//         user: PropTypes.PropTypes.shape({
//             links: PropTypes.PropTypes.shape({
//                 html: PropTypes.string.isRequired
//             }).isRequired,
//             username: PropTypes.string.isRequired,
//             location: PropTypes.string
//         }).isRequired,
//         urls: PropTypes.PropTypes.shape({
//             regular: PropTypes.string.isRequired
//         }).isRequired
//     }).isRequired
// };

