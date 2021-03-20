import { DECREMENT, INCREMENT } from "./countType"

export const increment = () => {
    return {
        type : INCREMENT,
    }
}

export const decrement = () => {
    return {
        type : DECREMENT
    }
}