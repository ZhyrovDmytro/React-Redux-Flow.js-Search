// @flow

// Utilities
import React from 'react';

// Components
import Item from './Item';
import getRandomNumber from '../helpers/getRandomNumber';

type Props = {
    images: Array<Object>
}

const resultList = (props: Props) => {

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

export default resultList;
