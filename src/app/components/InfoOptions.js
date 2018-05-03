// Utilities
import React from 'react';
import PropTypes from 'prop-types';
import ReactSVG from 'react-svg';

// Components
import Icon from './base/Icon';

const infoOptions = props => {
    return (
        <div className="results__option">
            <a href={props.info.links.html} className="link link--grey results__option--like">
                <Icon
                    name="like"
                    className="results__option--icon"
                />
                {props.info.likes}
            </a>
            <a
                className="link link--grey results__option--download"
                href={props.info.links.download}
                download
            >
                <span>
                    Download
                </span>
            </a>
        </div>
    );
};

infoOptions.propTypes = {
    info: PropTypes.PropTypes.shape({
        links: PropTypes.PropTypes.shape({
            html: PropTypes.string.isRequired,
            download: PropTypes.string.isRequired
        }).isRequired,
        likes: PropTypes.number.isRequired
    }).isRequired
};

export default infoOptions;
