// @flow

// Utilities
import React from 'react';

// Components
import Icon from './base/Icon';

type PropsType = {
    info: Object
}

const infoOptions = (props: PropsType) => {
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

export default infoOptions;
