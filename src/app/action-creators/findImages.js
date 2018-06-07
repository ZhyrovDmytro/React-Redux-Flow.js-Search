// Utilities
import axios from 'axios';

// Constants
import {
    LOAD_IMAGES,
    LOAD_IMAGES_ERROR,
    RECEIVE_IMAGES,
    LOAD_RANDOM_IMAGES
} from '../constants';

export default function findImages(path) {

    return dispatch => {
        dispatch(receiveImages());

        axios.get(path)
            .then(response => {
                if (response.data instanceof Array) {
                    dispatch(getRandomImages(response.data));
                } else if (response.data instanceof Object) {
                    dispatch(getImages(response.data.results));
                }
            })
            .catch((error) => {
                console.log(error);
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

export function getRandomImages(images) {
    return {
        type: LOAD_RANDOM_IMAGES,
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
