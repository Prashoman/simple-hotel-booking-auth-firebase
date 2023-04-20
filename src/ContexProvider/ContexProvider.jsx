import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthProvider = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const ContexProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const singUp = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const loginWithGoogle = () =>{
        return signInWithPopup(auth,googleProvider)
    }

    useEffect(() =>{
      const unSubscribe =  onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser)
        })
        return () =>{
            return unSubscribe
        }
    },[]);

    const logOut = () =>{
      return  signOut(auth)
    }
    const apiData = {
        user,
        createUser,
        loginWithGoogle,
        singUp,
        logOut
    }
    return (
        <AuthProvider.Provider  value={apiData}>
            {children}
        </AuthProvider.Provider>
    );
};

export default ContexProvider;