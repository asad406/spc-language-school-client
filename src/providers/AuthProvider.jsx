import { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} from 'firebase/auth';

export const AuthContext = createContext(null);
const auth = getAuth(app);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    //Sign in with google
    const googleProvider = new GoogleAuthProvider();
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    };
    //Sign in with Email and password
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    //Sign up with Email and password
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };
    //Update Name and Photo url
    const updateUser = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }
    // Sign Out 
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
            setUser(loggedUser);
            if(loggedUser?.email){
                fetch('https://spc-school-server.vercel.app/jwt',{
                    method: "POST",
                    headers: {
                        "content-type" : "application/json"
                    },
                    body: JSON.stringify({email: loggedUser?.email}),
                })
                .then((res) => res.json())
                .then((data) => {
                    localStorage.setItem("access-token", data?.token)
                    setLoading(false);
                })
            }
            else{
                localStorage.removeItem("access-token")
            }
            
        });

        return () => {
            unsubscribe();
        };
    }, []);
    const authInfo = {
        user,
        loading,
        googleSignIn,
        createUser,
        updateUser,
        signIn,
        logOut,
    };
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
