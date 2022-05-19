import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';
import mainReducer from './main-reducer';

export { useRootSelector } from './hooks';

// enchancer - papildomi veiksmai
// middleware - tai yra tarpiniai veiksmai
// createStore(reducer, enchancer)

const reduxMiddlewareEnhancer = applyMiddleware(thunk);
const reduxDevToolsEnhancer = composeWithDevTools();
const joinedEnhancer = compose(reduxMiddlewareEnhancer, reduxDevToolsEnhancer);
const store = createStore(mainReducer, joinedEnhancer);

export default store;
