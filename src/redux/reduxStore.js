import { combineReducers, createStore } from 'redux';
import { dialogsReducer } from './dialogsReducer'
import { profileReducer } from './profileReducer'
import { usersReducer } from './usersReducer'

let reducers = combineReducers({
    dialogComponentData: dialogsReducer,
    profileComponentData: profileReducer,
    usersComponentData: usersReducer
});

let store = createStore(reducers);

export default store;