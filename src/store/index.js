import {createStore, applyMiddleware} from 'redux';
// import from 'redux-thunk'
import reducer from '../reducer/CombineReducers';
import {composeWithDevTools} from 'redux-devtools-extension';

const store = createStore(
    reducer,
    {},
    composeWithDevTools()
);

export default store;