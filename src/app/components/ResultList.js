import React, { Component } from 'react';

export default (props) => {
    const createItem = [...props.images].map((image) => {
        return (
            <figure
                key={image.id}
                className="results__wrapper"
            >
                <picture
                    className="results__item"
                >
                    <img
                        className="results__image"
                        src={image.urls.small}
                        alt=""
                    />
                </picture>
            </figure>
        );
    });

    return (
        <div className="results">
            { createItem }
        </div>
    );
};
