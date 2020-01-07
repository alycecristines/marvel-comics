import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import multi from 'redux-multi';
import reducers from '../reducers';

const middlewares = [multi, thunk];

const store = createStore(reducers, applyMiddleware(...middlewares));
// const store = createStore(() => {});

export default store;
