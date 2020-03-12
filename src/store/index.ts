import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import auth from './ducks/auth';

const reducers = combineReducers({
  auth,
});

export default createStore(reducers, composeWithDevTools());
