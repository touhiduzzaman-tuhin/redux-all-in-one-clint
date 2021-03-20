import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { addPlayer, deletePlayer, fetchDeletePlayer, fetchReadPlayer } from '../../redux/player/playerAction';
import PlayerCart from '../PlayerCart/PlayerCart';
import PlayerDetails from '../PlayerDetails/PlayerDetails';
import './Player.css';

const Player = (props) => {
    console.log(props);
    const { players, addPlayer, deletePlayer, fetchReadPlayer, fetchDeletePlayer} = props;

    useEffect( () => {
        fetchReadPlayer();
    }, [])

    // useEffect( () => {
    //     fetchDeletePlayer()
    // }, [])

    return (
        <div className='container' align='center'>
            <h3 className='my-5'>Player List</h3>
            <div className='d-flex'>
                <div className='row player-details-area'>
                    {
                        players.map(player => <PlayerDetails key={player.id} player={player} addPlayer={addPlayer} deletePlayer={deletePlayer} fetchDeletePlayer={fetchDeletePlayer}></PlayerDetails>)
                    }
                </div>
                <div className='player-cart-area'>
                    <PlayerCart></PlayerCart>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        players: state.players.players,
        playerCart: state.players.playerCart
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchDeletePlayer : (_id) => dispatch(fetchDeletePlayer(_id)),
        fetchReadPlayer : () => dispatch(fetchReadPlayer()),
        addPlayer: (name, id) => dispatch(addPlayer(name, id)),
        deletePlayer : (id) => dispatch(deletePlayer(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);