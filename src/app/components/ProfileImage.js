// @flow

import React from 'react';

type PropsType = {
    info: Object
}

const profileImage = (props: PropsType) => {
    return (
        <img
            className="results__profile--image"
            src={props.info.user.profile_image.small}
            alt=""
        />
    );
};

export default profileImage;
