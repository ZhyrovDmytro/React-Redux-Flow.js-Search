// Utilities
import React from 'react';
import PropTypes from 'prop-types';

// Components
import Item from './Item';
import getRandomNumber from '../helpers/getRandomNumber';

const resultList = props => {

    const createItem = props.images.map((image) => {
        return (
            <figure
                key={`_${image.id}${getRandomNumber()}`}
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

resultList.propTypes = {
    images: PropTypes.array.isRequired
};

export default resultList;
