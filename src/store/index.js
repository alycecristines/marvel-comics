import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import multi from 'redux-multi';
import reducers from '../reducers';

import Reactotron from '../config/ReactotronConfig';

const middlewares = [multi, thunk];

const enhancers =
  __DEV__ === true
    ? compose(applyMiddleware(...middlewares), Reactotron.createEnhancer())
    : compose(applyMiddleware(...middlewares));

const store =
  __DEV__ === true
    ? createStore(reducers, {}, enhancers)
    : createStore(reducers, applyMiddleware(...middlewares));
// createStore(reducers, applyMiddleware(...middlewares), Reactotron.createEnhancer());
// const store = createStore(() => {});

export default store;
