import ItemsManagement from './ItemsManagement';
import loggedReducer from './isLogged';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  list: ItemsManagement,
  isLogged: loggedReducer
});

// list is used for list.map

export default allReducers;
