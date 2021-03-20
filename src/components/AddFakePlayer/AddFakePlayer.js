// import axios from 'axios';
import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import playerData from '../../fakeData/playerData';

const AddFakePlayer = () => {
    // const url = 'http://localhost:5000/addFakePlayer';
    const history = useHistory();

    const playerDataList = playerData;
    const handleAddFakePlayer = () => [
        fetch('http://localhost:5000/addFakePlayer', {
            method : 'POST',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify(playerDataList)
        })
        .then(response => response.json())
        .then(data => {
            if(data){
                history.push('/player');
            }
        })
        .catch(error => {
            const errorMessage = error.message;
            console.log(errorMessage);
        })
    ]
    return (
        <div align='center' className='container'>
            <Button className='my-5' variant='success' onClick={handleAddFakePlayer}>
                Add Fake Players
            </Button>
        </div>
    );
};

export default AddFakePlayer;