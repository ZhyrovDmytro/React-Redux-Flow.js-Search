import React from 'react';
import ReactSVG from 'react-svg';
import Like from './svg/Like';

export default (props) => {
    return (
        <div className="results__option">
            <a href={props.info.links.html} className="link link--grey results__option--like">
                    <Like
                        name="like"
                        className="results__option--icon"
                    />
                    {props.info.likes}
            </a>
            <a className="link link--grey results__option--download" href={props.info.links.download} download>
                <span>
                    Download
                </span>
            </a>
        </div>
    );
};
