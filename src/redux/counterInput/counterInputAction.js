import { INPUT_DECREMENT, INPUT_INCREMENT } from "./counterInputType"

export const counterIncrement = (value) => {
    return {
        type : INPUT_INCREMENT,
        payload : value
    }
}

export const counterDecrement = (value) => {
    return {
        type : INPUT_DECREMENT,
        payload : value
    }
}