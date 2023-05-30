import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../../firebase.config';


export const DataProvider = createContext();
const auth = getAuth(app);


const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loader,setLoader] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoader(false);
            console.log(currentUser);
        })
        return () => unsubscribe();
    },[])

    const newUserCreate = (email,password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const userLogin = (email,password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth,email,password);
    }
    const userUpdate = (name,photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          })
    }
    const userSignOut = () => {
        setLoader(true)
        return signOut(auth);
    }

    const sharedValues = {
        user,
        loader,
        newUserCreate,
        userLogin,
        userUpdate,
        userSignOut
        
    }
    return (
        <DataProvider.Provider value={sharedValues}>
            {children}
        </DataProvider.Provider>
    );
};

export default AuthProvider;