'use strict';

import { combineReducers } from 'redux';
import Home from './HomeReducer';

const rootReducer = combineReducers({
    Home: Home,
});

export default rootReducer;