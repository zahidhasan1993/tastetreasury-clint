import React, { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../../firebase.config";
import axios from "axios";

export const DataProvider = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        axios.post("http://localhost:5000/jwt", {
          email: currentUser.email,
        })
        .then(data => {
            // console.log(data.data.token);
            localStorage.setItem('ACCESS_TOKEN', data.data.token);
            setLoader(false);
        })
      }
      else{
        localStorage.removeItem('ACCESS_TOKEN')
      }
      

      // console.log(currentUser);
    });
    return () => unsubscribe();
  }, []);
  const userGoogleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const newUserCreate = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const userLogin = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const userUpdate = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  const userSignOut = () => {
    setLoader(true);
    return signOut(auth);
  };

  const sharedValues = {
    user,
    loader,
    newUserCreate,
    userLogin,
    userUpdate,
    userGoogleLogin,
    userSignOut,
  };
  return (
    <DataProvider.Provider value={sharedValues}>
      {children}
    </DataProvider.Provider>
  );
};

export default AuthProvider;
