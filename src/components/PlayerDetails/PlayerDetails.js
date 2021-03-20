import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './PlayerDetails.css';

const PlayerDetails = ({ player, addPlayer, deletePlayer}) => {
    const { name, role, country, id } = player;
    return (
        <div className='col-md-4'>
            <div className="player-area">
                <Link to={`/singlePlayer/${id}`}>
                    <p>Player Name : {name}</p>
                </Link>
                <p>Role : {role}</p>
                <p>Country : {country}</p>
                <Button variant='success' onClick={() => addPlayer(name, id)}>
                    Add
                </Button>
                &nbsp; &nbsp;
                <Button variant='danger' onClick={() => deletePlayer(id)}>
                    Delete
                </Button>
            </div>
        </div>
    );
};

export default PlayerDetails;