import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaUserLock, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/UserContext/UserContext';
import BrandCarousel from '../BrandCarousel/BrandCarousel';

const RightSideNav = () => {
    const { googleSignIn, handelSignOut, user, handelUpdateProfile } = useContext(AuthContext);
    const handelGoogleSignIn = () => {
        googleSignIn()
            .then(({ user }) => {
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div>
            <div className="d-grid gap-2">

                {
                    user?.emailVerified ?
                        <>
                            <Button onClick={handelSignOut} variant="dark" size="lg shadow">
                                Sign Out <FaSignOutAlt />
                            </Button>
                            <Link to='/update-profile'>
                                <Button variant="dark" size="lg shadow">
                                    Update You Profile <FaUser />
                                </Button>
                            </Link>
                        </>
                        :
                        <>
                            <Link to='/sign-up'>
                                <Button variant="primary" size="lg shadow">
                                    <FaUserLock /> Email And Password
                                </Button>
                            </Link>
                            <Button onClick={handelGoogleSignIn} variant="secondary" size="lg shadow">
                                <FaGoogle />  Google Sing in
                            </Button>
                            <Button variant="dark" size="lg shadow">
                                <FaGithub /> GitHub Sing in
                            </Button>
                        </>
                }
            </div>
            <div className="d-grid mt-5 gap-2">
                <Button className='py-3' variant="outline-info">Secondary</Button>
                <Button className='py-3' variant="outline-info">Secondary</Button>
                <Button className='py-3' variant="outline-info">Secondary</Button>
                <Button className='py-3' variant="outline-info">Secondary</Button>
            </div>
            <div className='shadow'>
                <BrandCarousel></BrandCarousel>
            </div>
        </div>
    );
};

export default RightSideNav;