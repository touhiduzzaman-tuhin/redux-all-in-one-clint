import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../../redux/jsonUser/jsonUserAction';
import JsonUserDetails from '../JsonUserDetails/JsonUserDetails';

const JsonUser = ({ fetchUsers, users }) => {

    useEffect(() => {
        fetchUsers()
    }, [])
    console.log(users);
    return users.loading ? (
        <h1 className='my-5' align='center'>Loading....</h1>
    ) : users.error ? (
        <h1 className='my-5' align='center'>{users.error}</h1>
    ) : (
        <div className='container' align='center'>
            <h3 className='my-5'>Json User List</h3>
            <div className='row'>
                {
                    users && users.length > 0 && users.map(user => <JsonUserDetails key={user.id} user={user}></JsonUserDetails>)
                }
            </div>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        users: state.users.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(JsonUser);