import React from 'react';
import { useRef } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addFriend, deleteFriend } from '../../redux/friend/friendAction';
import FriendDetails from '../FriendDetails/FriendDetails';

const Friend = (props) => {
    console.log(props);
    const {friends, addFriend, deleteFriend } = props;

    const nameRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        addFriend(nameRef.current.value, friends.length+1);
        nameRef.current.value = '';
    }

    return (
        <div className='container' align='center'>
            <form>
                <div className="form-group my-5">
                    <input type="text" name="name" id="" placeholder='Enter Friend Name' className='form-control' ref={nameRef} required/>
                </div>

                <div className="from-group">
                    <Button variant='success' onClick={handleSubmit}>
                        Add Friend
                    </Button>
                </div>
            </form>

            <h3 className='my-5'>Friend List</h3>

            <div className='row'>
                {
                    friends.map(friend => <FriendDetails key={friend.id} friend={friend} deleteFriend={deleteFriend}></FriendDetails>)
                }
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        friends : state.friends.friends
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addFriend : (name, id) => dispatch(addFriend(name, id)),
        deleteFriend : (id) => dispatch(deleteFriend(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Friend);