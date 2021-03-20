import React from 'react';
import { Button } from 'react-bootstrap';
import './FriendDetails.css';

const FriendDetails = (props) => {
    console.log(props);
    const { friend, deleteFriend } = props;
    const { name, id } = friend;
    return (
        <div className='col-md-3'>
            <div className='friend-area'>
                <p>Name : {name}</p>
                <Button variant='danger' onClick={() => deleteFriend(id)}>
                    Delete Friend
                </Button>
            </div>
        </div>
    );
};

export default FriendDetails;