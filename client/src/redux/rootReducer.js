import {combineReducers} from 'redux';

import app from './reducers/app'
import user from './reducers/user'

// component reducers

// feature reducers

export default combineReducers({
    app,
    user,
});
