// @flow

import React from 'react';

type Props = {
    info: Object,
    profile_image: Object,
    small: string
}

const profileImage = (props: Props) => {
    return (
        <img
            className="results__profile--image"
            src={props.info.user.profile_image.small}
            alt=""
        />
    );
};

export default profileImage;
