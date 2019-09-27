import {combineReducers} from 'redux';

import background from './reducers/background'
import user from './reducers/user'

// component reducers

// feature reducers

export default combineReducers({
    background,
    user,
});
