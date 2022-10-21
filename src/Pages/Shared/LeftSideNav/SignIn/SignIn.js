import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../Context/UserContext/UserContext';

const SignIn = () => {
    const { signIn } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const handelFormSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(({ user }) => {
                console.log(user);
                form.reset();
                navigate('/home')

            })
            .catch(error => {
                console.log(error.message)
                setError(error.message)
            })
    };
    console.log(error)
    return (
        <div>
            <Form onSubmit={handelFormSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' required type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' required type="password" placeholder="Password" />
                </Form.Group>
                <p className='text-danger' to='/sign-up'>{error}</p><br />
                <Form.Text className="text-muted">
                    <Link to='/sign-up'>Sign Up</Link><br />
                </Form.Text>
                <Button variant="primary" type="submit">
                    Submit
                </Button><br />
            </Form>
        </div>
    );
};

export default SignIn;