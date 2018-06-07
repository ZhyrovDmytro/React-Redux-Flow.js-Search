import PropTypes from 'prop-types';

import {
    LOAD_IMAGES,
    LOAD_IMAGES_ERROR,
    LOAD_MORE_IMAGES,
    LOAD_RANDOM_IMAGES,
    LOAD_MORE_RANDOM_IMAGES,
    RECEIVE_IMAGES
} from '../constants';

const defaultState = {
    images: [],
    isFetching: false,
    existMoreItems: false,
    loadRandomImages: false,
    noImages: false,
    loadMoreImages: false
};

export default function requstService(state = defaultState, action) {
    const { type, data } = action;

    switch (type) {
        case LOAD_IMAGES: {
            if (data.length !== 0) {
                return {
                    images: data,
                    isFetching: false,
                    existMoreItems: true,
                    loadRandomImages: false
                };
            }
            return {
                ...state,
                noImages: true,
                isFetching: false,
                loadRandomImages: false
            };
        }
        case LOAD_RANDOM_IMAGES: {
            return {
                images: data,
                isFetching: false,
                existMoreItems: true,
                loadRandomImages: true
            };
        }
        case LOAD_MORE_IMAGES: {
            return {
                ...state,
                images: state.images.concat(data),
                isFetching: false,
                loadRandomImages: false,
                existMoreItems: true
            };
        }
        case LOAD_MORE_RANDOM_IMAGES: {
            return {
                ...state,
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
