import PropTypes from 'prop-types';

import {
    LOAD_IMAGES,
    LOAD_IMAGES_ERROR,
    LOAD_MORE_IMAGES,
    LOAD_RANDOM_IMAGES,
    RECEIVE_IMAGES
} from '../constants';

const defaultState = {
    images: [],
    isFetching: false,
    existMoreItems: false,
    loadRandomImages: false
};

export default function requstService(state = defaultState, action) {
    const { type, data } = action;

    switch (type) {
        case LOAD_IMAGES: {
            const { response } = data;
            return {
                ...state,
                images: state.images.concat(data),
                isFetching: false,
                existMoreItems: true,
                loadRandomImages: false
            };
        }
        case LOAD_RANDOM_IMAGES: {
            const { response } = data;
            return {
                images: state.images.concat(data),
                isFetching: false,
                existMoreItems: true,
                loadRandomImages: true
            };
        }
        case RECEIVE_IMAGES: {
            return {
                ...state,
                isFetching: true
            };
        }
        case LOAD_IMAGES_ERROR: {
            return {
                isFetching: false
            };
        }

        default:
            return state;
    }
}


requstService.propTypes = {
    images: PropTypes.array.isRequired,
    action: PropTypes.object.isRequired
};
