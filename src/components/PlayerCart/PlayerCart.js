import React from 'react';
import { connect } from 'react-redux';
import { removePlayer } from '../../redux/player/playerAction';
import PlayerCartDetails from '../PlayerCartDetails/PlayerCartDetails';

const PlayerCart = (props) => {
    console.log(props);
    const {cartData, removePlayer} = props;
    return (
        <div>
            <h3>This is player Cart</h3>
            {
                cartData.map(players => <PlayerCartDetails key={players.cartId} players={players} removePlayer={removePlayer}></PlayerCartDetails>)
            }
        </div>
    );
};

const mapStateToProps =(state) => {
    return {
        cartData : state.players.playerCart
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removePlayer : (id) => dispatch(removePlayer(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerCart);