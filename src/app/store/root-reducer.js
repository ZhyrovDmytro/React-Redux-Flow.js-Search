import { combineReducers } from 'redux';

import requestService from '../reducers/requestService';

const rootReducer = combineReducers({
    requestService
});

export default rootReducer;
