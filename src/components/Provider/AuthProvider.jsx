import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../../firebase/firebase.config";
import Login from "../Login/Login";


export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); 
  

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
    setLoading(true);
  };

  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
    setLoading(true);

  }
const logOut = () => {
    return signOut(auth);
}
  useEffect(() => {
  const unSubscribe =  onAuthStateChanged(auth, (CurrentUser) => {
      console.log(CurrentUser);
      setUser(CurrentUser)
      setLoading(false);
    });
    return () => {
      unSubscribe();
    }
  }, []);

  const AuthInfo = { 
    user,
    loading,
    createUser, 
    logIn,
    logOut
  };
  return (
    <div>
      <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
