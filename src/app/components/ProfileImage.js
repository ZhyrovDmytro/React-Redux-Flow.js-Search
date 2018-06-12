// @flow

import React from 'react';

type PropsType = {
    info: {
        user: {
            profile_image: {
                small: string
            },
            links: {
                html: string
            },
            first_name: string,
            last_name: string,
        }
    }
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
