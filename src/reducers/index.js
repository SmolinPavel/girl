import { combineReducers } from 'redux';

import categoriesReducer from './categories';
// import tasksReducer from './tasks';
// import progressBarReducer from './progressBar';

const appState = combineReducers({
    categories: categoriesReducer,
    // progressBar: progressBarReducer,
    // tasks: tasksReducer,
});

export default appState;
