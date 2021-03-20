import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar className='container' collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand as={Link} to='/home'>React-Redux-Crud</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mx-auto">
                    <Nav.Link as={Link} to='/'>Home</Nav.Link>                    
                    <Nav.Link as={Link} to='/counter'>Counter</Nav.Link>                    
                    <Nav.Link as={Link} to='/inputCounter'>Input Counter</Nav.Link>                    
                    <Nav.Link as={Link} to='/friend'>Friends</Nav.Link>                    
                    <Nav.Link as={Link} to='/jsonUser'>Json User</Nav.Link>                    
                    <Nav.Link as={Link} to='/player'>Players</Nav.Link>                    
                    <Nav.Link as={Link} to='/addFakePlayer'>Add Fake Player</Nav.Link>                    
                    <Nav.Link as={Link} to='/createPlayer'>Create Player</Nav.Link>                    
                </Nav>       
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;