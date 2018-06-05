import {
    LOAD_IMAGES,
    LOAD_IMAGES_ERROR,
    RECEIVE_IMAGES
} from '../constants';

const defaultState = {
    images: [],
    isFetching: false
};

export default function requstService(state = defaultState, action) {
    // console.log(action);
    const { type, data } = action;
    switch (type) {
        case LOAD_IMAGES: {
            const { response } = data;
            return {
                images: data,
                isFetching: false
            };
        }
        case RECEIVE_IMAGES: {
            return {
                isFetching: true,
                images: []
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
