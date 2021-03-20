import { ADD_PLAYER, CREATE_PLAYER, DELETE_PLAYER, FETCH_PLAYER_SUCCESS, REMOVE_PLAYER } from "./playerType"

export const createPlayer = (player) => {
    return {
        type : CREATE_PLAYER,
        payload : player
    }
}

export const deletePlayer = (id) => {
    return {
        type : DELETE_PLAYER,
        payload : id
    }
}

export const addPlayer = (name, id) => {
    return {
        type : ADD_PLAYER,
        payload : {name, id}
    }
}

export const removePlayer = (id) => {
    return {
        type : REMOVE_PLAYER,
        payload : id
    }
}

export const fetchPlayerSuccess = (player) => {
    return {
        type : FETCH_PLAYER_SUCCESS,
        payload : player
    }
}

export const fetchPlayer = () => {
    return (dispatch) => {
        fetch('http://localhost:5000/addPlayer', {
            method : 'POST',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify()
        })
    }
}