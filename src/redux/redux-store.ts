import {combineReducers, createStore} from "redux";
import {profileReducer} from "../state/profile_reducer";
import {dialogsReducer} from "../state/dialogs_reducer";
import {friendsReducer} from "../state/friends_reducer";

let reducers = combineReducers({
    profile: profileReducer,
    message: dialogsReducer,
    friends: friendsReducer,
});

export let store = createStore(reducers);