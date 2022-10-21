import { updateEmail, updateProfile } from 'firebase/auth';
import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/UserContext/UserContext';
import auth from '../../../firebase/firebase.init';

const UpdateProfile = () => {
    const { setUser } = useContext(AuthContext);
    const handelFormSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        console.log(name, photo)
        updateProfile(auth.currentUser, {
            displayName: `${name}`, photoURL: `${photo}`
        }).then(() => {

        }).catch((error) => {
            console.log(error)
        });
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
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>You Photo URL</Form.Label>
                        <Form.Control name='photo' required type="text" placeholder="Enter You Photo URL" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form.Group>
            </Form>
        </div>
    );
};
export default UpdateProfile;