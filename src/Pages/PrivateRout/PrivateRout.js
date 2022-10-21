import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { AuthContext } from '../../Context/UserContext/UserContext';
import SignUp from '../SignUp/SignUp';

const PrivateRout = ({ children }) => {
    const { user, loader } = useContext(AuthContext);
    if (user?.emailVerified) {
        return children;
    }
    if (user?.email) {
        return <h2>Email Verified</h2>
    }
    if (loader) {
        return <Spinner animation="border" variant="primary" />
    }
    else {
        return <SignUp></SignUp>
    }
};

export default PrivateRout;