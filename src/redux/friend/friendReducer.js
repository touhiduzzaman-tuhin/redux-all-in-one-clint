import { ADD_FRIEND, DELETE_FRIEND } from "./friendType"

const initialState = {
    friends : []
}

export const friendReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_FRIEND:
            const newFriend = {
                name : action.payload.name,
                id : action.payload.id
            }
            const friends = [...state.friends, newFriend];
            return {
                ...state,
                friends : friends
            }
        
        case DELETE_FRIEND:
            console.log(action);
            const ptId = action.payload;
            console.log(ptId);
            const remainingFriend = state.friends.filter(friend => friend.id !== ptId)
            return { friends : remainingFriend }

        default:
            return {
                ...state
            }
    }
}