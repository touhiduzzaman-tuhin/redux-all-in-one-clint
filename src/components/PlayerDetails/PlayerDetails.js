import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './PlayerDetails.css';

const PlayerDetails = ({ player, addPlayer, deletePlayer, fetchDeletePlayer}) => {
    const { name, role, country, id, _id } = player;
    
    const handleDelete = (id, _id) => {
        deletePlayer(id);
        fetchDeletePlayer(_id);
    }

    return (
        <div className='col-md-4'>
            <div className="player-area">
                <Link to={`/singlePlayer/${_id}`}>
                    <p>Player Name : {name}</p>
                </Link>
                <p>Role : {role}</p>
                <p>Country : {country}</p>
                <Button variant='success' onClick={() => addPlayer(name, id)}>
                    Add
                </Button>
                &nbsp; &nbsp;
                {/* <Button variant='danger' onClick={() => deletePlayer(id)}>
                    Delete
                </Button> */}
                <Button variant='danger' onClick={() => handleDelete(id, _id)}>
                    Delete
                </Button>
            </div>
        </div>
    );
};

export default PlayerDetails;