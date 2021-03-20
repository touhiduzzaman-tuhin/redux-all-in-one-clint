import { INPUT_DECREMENT, INPUT_INCREMENT } from "./counterInputType"

const initialState = {
    number : 50
}

export const counterInputReducer = (state = initialState, action) => {
    switch(action.type){
        case INPUT_INCREMENT:
            return {
                ...state,
                number : state.number + action.payload
            }
        
        case INPUT_DECREMENT:
            return {
                ...state,
                number : state.number - action.payload
            }

        default:
            return state;
    }
}