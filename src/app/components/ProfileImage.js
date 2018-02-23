import React from 'react';

export default (props) => {
    return (
        <img
            className="results__profile--image"
            src={props.info.user.profile_image.small}
            alt=""
        />
    );
};
