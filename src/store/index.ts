import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import auth from './ducks/auth';
import meeting from './ducks/meeting';

const reducers = combineReducers({
  auth,
  meeting,
});

export default createStore(reducers, composeWithDevTools());
