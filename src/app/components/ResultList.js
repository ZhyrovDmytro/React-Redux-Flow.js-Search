import React, { Component } from 'react';
import Item from './Item';
import ModalWindow from './ModalWindow';

export default (props) => {
    const createItem = [...props.images].map((image) => {
        return (
            <figure
                key={image.id}
                className="results__wrapper"
            >
                <Item image={image} />
            </figure>
        );
    });

    return (
        <div className="results">
            { createItem }
        </div>
    );
};
