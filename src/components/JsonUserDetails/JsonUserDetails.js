import React from 'react';
import { useHistory } from 'react-router-dom';
import './JsonUserDetails.css';

const JsonUserDetails = ({ user }) => {
    const { name, username, website } = user;
    const history = useHistory();
    const handleClick = (name) => {
        history.push(`/${name}`)
    }
    return (
        <div className='col-md-4'>
            <div className='json-user-details-area'>
                {/* <Link to='/jsonUser/tuhin'>
                    Name : {name}
                </Link> */}
                <p className='name-link' onClick={() => handleClick(name)}>
                    Name : {name}
                </p>
                <p>User-Name : {username}</p>
                <p>Website : {website}</p>
            </div>
        </div>
    );
};

export default JsonUserDetails;