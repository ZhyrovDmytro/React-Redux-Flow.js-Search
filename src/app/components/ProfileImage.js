import React from 'react';
import PropTypes from 'prop-types';

const profileImage = props => {
    return (
        <img
            className="results__profile--image"
            src={props.info.user.profile_image.small}
            alt=""
        />
    );
};

profileImage.propTypes = {
    info: PropTypes.PropTypes.shape({
        user: PropTypes.PropTypes.shape({
            profile_image: PropTypes.PropTypes.shape({
                small: PropTypes.string.isRequired
            }).isRequired
        }).isRequired
    }).isRequired
};

export default profileImage;
