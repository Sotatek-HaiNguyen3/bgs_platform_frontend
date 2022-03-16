import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// reducers
import home from './home/reducers';
import auth from './auth/reducers';

const rootReducer = combineReducers({
  home,
  routing: routerReducer,
  auth
});

export default rootReducer;
