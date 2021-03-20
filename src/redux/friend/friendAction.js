import { ADD_FRIEND, DELETE_FRIEND } from "./friendType"

export const addFriend = (name, id) => {
    return {
        type : ADD_FRIEND,
        payload : {name, id}
    }
}

export const deleteFriend = (id) => {
    return {
        type : DELETE_FRIEND,
        payload : id
    }
}