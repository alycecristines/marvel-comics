import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import multi from 'redux-multi';
import promise from 'redux-promise';
import reducers from '../reducers';
import reactotron from '../config/ReactotronConfig';

const middlewares = applyMiddleware(multi, thunk, promise);
const store = createStore(
  reducers,
  compose(
    middlewares,
    reactotron.createEnhancer()
  )
);

// const store = createStore(() => {});

export default store;
