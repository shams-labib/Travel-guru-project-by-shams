import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../Init/_firebase.init';

const AuthProvider = ({children}) => {

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState([]);
    console.log(user)

    const createUser = (email, password)=>{
        setLoading(true)
         return createUserWithEmailAndPassword(auth, email, password);
    }

    const SignInUser = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    const signInOut = ()=>{
        return signOut(auth);
    }

    const updateProfileFunc = (displayName, photoURL)=> {
        return updateProfile(auth.currentUser,{displayName, photoURL})
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            setLoading(false);
        })
        return ()=>{
            unsubscribe
        }
    },[])

    const Info = {
        createUser,
        SignInUser,
        user,
        setUser,
        loading,
        signInOut,
        updateProfileFunc,
    }

    return <AuthContext value={Info}>
        {children}
    </AuthContext>
};

export default AuthProvider;