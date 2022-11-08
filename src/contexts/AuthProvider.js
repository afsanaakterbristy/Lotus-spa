import React, { createContext, useState } from 'react';
import { getAuth } from 'firebase/auth'
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
      const [user, setUser] = useState(null);
    const [loading,setLoading]=useState(true)

     const authInfo = {
         user,
        // providerLogin,
        // logOut,
        // createUser,
        // signIn,
         loading,
        // setLoading,
        // updateUserProfile,
        // providerGithub,
        // verifyEmail
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;