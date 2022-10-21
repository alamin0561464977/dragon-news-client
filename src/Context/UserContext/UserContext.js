import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase/firebase.init';

export const AuthContext = createContext();

const UserContext = ({ children }) => {
    const [user, setUser] = useState();
    const provider = new GoogleAuthProvider();
    const [loader, setLoader] = useState(true);


    const googleSignIn = () => {
        setLoader(true);
        return signInWithPopup(auth, provider);
    };

    const signUp = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password);
    };


    const handelSignOut = () => {

        signOut(auth)
            .then(({ user }) => {
                setUser(user)
                setLoader(true);
            })
            .catch(error => {
                console.log(error)
            })

    }

    useEffect(() => {
        const unS = onAuthStateChanged(auth, (user) => {
            setUser(user)
            setLoader(false);
        });
        return () => unS();
    }, [])

    const userInfo = { user, loader, handelSignOut, googleSignIn, signUp, signIn, setUser };
    return (
        <div>
            <AuthContext.Provider value={userInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;