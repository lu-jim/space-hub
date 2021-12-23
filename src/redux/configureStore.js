import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rocketsReducer from './rockets/rockets';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({

  rockets: rocketsReducer,
});
const store = createStore(
  reducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(logger, thunk),
  ),
);
export default store;
