import axios from "axios"
import { ADD_PLAYER, CREATE_PLAYER, DELETE_PLAYER, FETCH_READ_PLAYER_SUCCESS, REMOVE_PLAYER } from "./playerType"

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

export const fetchReadPlayerSuccess = (player) => {
    return {
        type : FETCH_READ_PLAYER_SUCCESS,
        payload : player
    }
}

export const fetchReadPlayer = () => {
    return (dispatch) => {
        axios.get('http://localhost:5000/players')
        .then(response => {
            const players = response.data;
            dispatch(fetchReadPlayerSuccess(players))
        })
        .catch(error => {
            const errorMessage = error.message;
            console.log(errorMessage);
        })
    }
}

export const fetchDeletePlayer = (_id) => {
    return (dispatch) => {
        return axios.delete(`http://localhost:5000/playerDelete/${_id}`)
        .then(response => {
            const data = response.data;
            console.log(data);
            // dispatch(deletePlayer())
        })
        .catch(error => {
            const errorMessage = error.message;
            console.log(errorMessage);
        })
    }
}