// Utilities
import React from 'react';
import PropTypes from 'prop-types';

// Components
import InfoOptions from './InfoOptions';
import ProfileImage from './ProfileImage';

const ItemInfo = props => {

    return (
        <div className="results__info">
            <InfoOptions info={props.info} />
            <div className="results__profile">
                <picture>
                    <a href={props.info.user.links.html}>
                        <ProfileImage info={props.info} />
                    </a>
                </picture>
                <span className="results__profile--name">
                    <a className="link" href={props.info.user.links.html}>
                        {props.info.user.first_name} {props.info.user.last_name}
                    </a>
                </span>
            </div>
        </div>
    );
};

ItemInfo.propTypes = {
    info: PropTypes.PropTypes.shape({
        links: PropTypes.PropTypes.shape({
            html: PropTypes.string.isRequired
        }).isRequired,
        user: PropTypes.PropTypes.shape({
            last_name: PropTypes.string
        }).isRequired
    }).isRequired
};

export default ItemInfo;
