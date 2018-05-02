// Utilities
import React from 'react';
import PropTypes from 'prop-types';

// Components
import Item from './Item';

export default function resultList(props) {

    const createItem = props.images.map((image) => {
        return (
            <figure
                key={`_${image.id}${Math.random().toString(36).slice(-5)}`}
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
}

resultList.propTypes = {
    images: PropTypes.array.isRequired
};
