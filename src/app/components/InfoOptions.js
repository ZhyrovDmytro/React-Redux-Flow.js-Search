import React from 'react';

export default (props) => {
    console.log(props);
    return (
        <div className="results__option">
            <a href={props.info.links.html} className="link link--grey results__option--like">
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
