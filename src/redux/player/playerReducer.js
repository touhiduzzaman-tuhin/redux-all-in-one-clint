import playerData from "../../fakeData/playerData"
import { ADD_PLAYER, CREATE_PLAYER, DELETE_PLAYER, REMOVE_PLAYER } from "./playerType"

const initialState = {
    players : playerData,
    playerCart : []
}

export const playerReducer = (state = initialState, action) => {
    switch(action.type){
        case CREATE_PLAYER:
            console.log(action);
            const newPlayerInfo = {
                name : action.payload.name,
                country : action.payload.country,
                role : action.payload.role,
                id : state.players.length+1
            }
            const playerInfo = [...state.players, newPlayerInfo]
            return {
                ...state,
                players : playerInfo
            }
        
        case DELETE_PLAYER:
            const deleteId = action.payload;
            const remaining = state.players.filter(player => player.id !== deleteId)

            return {
                ...state,
                players : remaining
            }

        case ADD_PLAYER:
            const newPlayerInformation = {
                playerName : action.payload.name,
                playerId : action.payload.id,
                cartId : state.playerCart.length + 1
            }
            const plyerInformation = [...state.playerCart, newPlayerInformation]
            return {
                ...state,
                playerCart : plyerInformation
            }
        
        case REMOVE_PLAYER:
            console.log(action);
            const removeId = action.payload;
            const remainingPlayerInformation = state.playerCart.filter(player => player.cartId !== removeId)

            return {
                ...state,
                playerCart : remainingPlayerInformation
            }

        default:
            return state;
    }
}