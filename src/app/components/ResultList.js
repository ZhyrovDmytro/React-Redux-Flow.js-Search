import React from 'react';
import Item from './Item';

export default (props) => {

    const createItem = props.images.map((image) => {
        return (
            <figure
                key={`_${image.id}`}
                // key={`_${image.id}${Math.random().toString(36).slice(-5)}`}
                className="results__wrapper"
            >
                <Item image={image} />
            </figure>
        );
    });

    return (
        <div className="js-results results">
            { createItem }
        </div>
    );
};
