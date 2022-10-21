import { sendEmailVerification, updateProfile } from 'firebase/auth';
import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext/UserContext';
import auth from '../../firebase/firebase.init';

const SignUp = () => {
    const { signUp, setUser } = useContext(AuthContext);
    const handelFormSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        signUp(email, password)
            .then(({ user }) => {
                sendEmailVerification(auth.currentUser)
                    .then(() => {
                        alert('Check You Email send Email Verification')
                    });
                updateProfile(auth.currentUser, {
                    displayName: name, photoURL: "https://example.com/jane-q-user/profile.jpg"
                }).then(({ user }) => {
                    setUser(user)
                }).catch((error) => {
                    // An error occurred
                    // ...
                });
                form.reset();
            })
            .catch(e => {
                console.log(e)
            })
    };
    return (
        <div>
            <Form onSubmit={handelFormSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>You Name</Form.Label>
                    <Form.Control name='name' required type="text" placeholder="Enter You Name" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
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
                <Form.Text className="text-muted">
                    <Link to='/sign-in'>Sign in</Link>
                </Form.Text>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default SignUp;