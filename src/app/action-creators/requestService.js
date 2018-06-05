// Utilities
import axios from 'axios';

// Constants
import {
    LOAD_IMAGES,
    LOAD_IMAGES_ERROR,
    RECEIVE_IMAGES
} from '../constants';

export default function requestServiceRedux(path) {

    return dispatch => {
        dispatch(receiveImages());

        axios.get(path)
            .then(response => {
                dispatch(getImages(response.data));
            })
            .catch((error) => {
                console.log('error');
                dispatch(noImages());
            });
    };
}

export function getImages(images) {
    return {
        type: LOAD_IMAGES,
        data: images
    };
}

export function noImages(images) {
    return {
        type: LOAD_IMAGES_ERROR
    };
}

export function receiveImages() {
    return {
        type: RECEIVE_IMAGES
    };
}
