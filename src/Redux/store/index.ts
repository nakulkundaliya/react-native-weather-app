import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../reducer/rootReducer';

export const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

export type AppDispatch = typeof store.dispatch;
