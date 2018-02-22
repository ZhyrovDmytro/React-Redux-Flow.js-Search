import React from 'react';

export default (props) => {
    return (
        <div className="modal">
            <figure className="modal__figure">
                <picture>
                    <img className="modal__image" src={props.props.urls.regular} alt="" />
                </picture>
            </figure>
        </div>
    );
};
