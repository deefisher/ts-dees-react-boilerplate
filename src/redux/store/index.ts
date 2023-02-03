//redux
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import thunkmiddleware from 'redux-thunk'; // middelware that waits to see if any actions return a function instead of an object. e it also allow for ajax redux actions

//redux dev tools
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const composeEnhancers = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkmiddleware)));

export default store;
