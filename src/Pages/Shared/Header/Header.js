import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { FaUser } from "react-icons/fa"; import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/UserContext/UserContext';

const Header = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className='mb-5'>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Link to="/home">Home</Link>
                        </Nav>
                        <div className="d-flex">
                            <h4>{user?.displayName}</h4>
                            <img className='user-image' src={user?.photoURL} alt="" />
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;