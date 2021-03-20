import React from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { createPlayer } from '../../redux/player/playerAction';
import './CreatePlayer.css';

const CreatePlayer = (props) => {
    console.log(props);
    const {players, createPlayer} = props;

    const [player, setPlayer] = useState({
        name: '',
        role: '',
        country: '',
        // id: ''
    });

    const handleBlur = (event) => {
        let formValid = true;
        if (formValid) {
            const playerInfo = { ...player };
            playerInfo[event.target.name] = event.target.value;
            setPlayer(playerInfo)
        }
    }

    const handleReset = (event) => {
        const newPlayerInfo = {
            name: '',
            role: '',
            country: '',
            // id: ''
        }
        setPlayer(newPlayerInfo)
        document.getElementById('name').value = '';
        document.getElementById('country').value = '';
        document.getElementById('role').value = '';
        // document.getElementById('id').value = '';
    }

    console.log(player);
    const history = useHistory();

    const handleCreatePlayer = (event) => {
        event.preventDefault();
        createPlayer(player);
        history.replace('/player');
    }

    return (
        <div align='center' className='container form-style'>
            <form>
                <h3 className='my-3'>Add New Player</h3>
                <div className="form-group">
                    <input type="text" name="name" id="name" placeholder='Enter Player Name' onBlur={handleBlur} required className='form-control' />
                </div>
                <div className="form-group">
                    <input type="text" name="country" id="country" placeholder='Enter Player Country' onBlur={handleBlur} required className='form-control' />
                </div>
                <div className="form-group">
                    <input type="text" name="role" id="role" placeholder='Enter Player Role' onBlur={handleBlur} required className='form-control' />
                </div>

                {/* <div className="form-group">
                    <input type="text" name="id" id="id" placeholder='Enter Player Id' onBlur={handleBlur} required className='form-control' />
                </div> */}

                <div className="form-group">
                    <Button variant='success' onClick={handleCreatePlayer}>
                        Save
                    </Button>
                    &nbsp; &nbsp;
                    <Button variant='danger' onClick={handleReset}>
                        Cancel
                    </Button>
                </div>
            </form>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        players : state.players.players
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createPlayer : (name, country, role) => dispatch(createPlayer(name, country, role))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePlayer);