import React from 'react';
import { Button } from 'react-bootstrap';
import './PlayerCartDettails.css';

const PlayerCartDetails = ({players, removePlayer}) => {
    const {playerName, cartId} = players;
    return (
        <div className='player-cart-details-style'>
            <p>Name : {playerName}</p>
            <Button variant='danger' onClick={() => removePlayer(cartId)}>
                Remove Player
            </Button>
        </div>
    );
};

export default PlayerCartDetails;