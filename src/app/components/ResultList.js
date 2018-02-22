import React from 'react';
import ItemInfo from './ItemInfo';

export default (props) => {
    const createItem = [...props.images].map((image) => {
        return (
            <figure
                key={image.id}
                className="results__wrapper"
            >
                <picture className="results__item" >
                    <img
                        className="results__image"
                        src={image.urls.small}
                        alt=""
                    />
                    <ItemInfo {...image} />
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
