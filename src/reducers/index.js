import ItemsManagement from './ItemsManagement';
import loggedReducer from './isLogged';
import { combineReducers, compose } from 'redux';

// LocalStorage
import persistState from 'redux-localstorage';

export const AllReducers = combineReducers({
  list: ItemsManagement,
  isLogged: loggedReducer
});
// list is used for list.map

// LocalStorage: persistState('list'),
export const MainEnhancer = compose(
  persistState('list'),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// MainEnhancer are complements for Redux, it's optional to use them

// export default allReducers;
