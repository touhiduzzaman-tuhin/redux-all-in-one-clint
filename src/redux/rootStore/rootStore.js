import { combineReducers } from "redux";
import { countReducer } from "../count/countReducer";
import { counterInputReducer } from "../counterInput/counterInputReducer";
import { friendReducer } from "../friend/friendReducer";
import { jsonUserReducer } from "../jsonUser/jsonUserReducer";
import { playerReducer } from "../player/playerReducer";

export const rootStore = combineReducers({
    players : playerReducer,
    value : countReducer,
    number : counterInputReducer,
    friends : friendReducer,
    users : jsonUserReducer
})