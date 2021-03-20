import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';

const SinglePlayer = () => {
    const {playerId} = useParams();
    useEffect(() => {
        axios.get(`http://localhost:5000/player/${playerId}`)
        .then(response => {
            const player = response.data;
            console.log(player);
        })
        .catch(error => {
            const errorMessage = error.message;
            console.log(errorMessage);
        })
    }, [playerId])
    return (
        <div className='container' align='center'>
            <h3>This is Single Player Page</h3>
        </div>
    );
};

export default SinglePlayer;