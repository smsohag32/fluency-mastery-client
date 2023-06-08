import { createContext, useEffect, useState } from "react";
import axios from "axios";
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
import app from "../firebase/firebase.config";

const auth = getAuth(app);
// context create
export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

// auth provider component
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  //   create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //   login user
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //  google login
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //   update user profile
  const updateProfileInfo = (name, photo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  //   user sing out
  const userLogout = () => {
    setLoading(true);
    return signOut(auth);
  };

  //   all value object
  const authInfo = {
    user,
    createUser,
    loginUser,
    googleLogin,
    userLogout,
    updateProfileInfo,
    loading,
    setLoading,
  };
  //   observer
  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (loggedUser) => {
      setUser(loggedUser);

      if (loggedUser?.email) {
        axios
          .post("http://localhost:5000/jwt", {
            email: loggedUser.email,
          })
          .then((data) => {
            localStorage.setItem("access-token", data.data.token);
            setLoading(false);
          })
          .catch((err) => {
            console.log(err);
            setLoading(false);
          });
      } else {
        localStorage.removeItem("access-token");
        setLoading(false);
      }
    });

    // unmount
    return () => unSub();
  }, []);

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
