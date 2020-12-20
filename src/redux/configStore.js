import {combineReducers, createStore} from 'redux';


const rootReducer = combineReducers({
    // Nơi định nghĩa các Reducer trong hệ thống
});

export const store = createStore(rootReducer);