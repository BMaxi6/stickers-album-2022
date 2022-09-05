import {combineReducers, createStore} from 'redux';
import { stickerReducer } from './reducers/stickerReducer';
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(stickerReducer, composeWithDevTools());

export default store;