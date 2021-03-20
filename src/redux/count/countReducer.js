import { DECREMENT, INCREMENT } from "./countType"

const initialState = {
    value : 10
}

export const countReducer = (state = initialState, action) => {
    switch(action.type){
        case INCREMENT:
            return {
                ...state,
                value : state.value + 1
            }

        case DECREMENT:
            return {
                ...state,
                value : state.value - 1
            }

        default:
            return state;
    }
}