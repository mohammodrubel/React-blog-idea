import React from 'react';
import { createContext } from 'react';
import useFirebase from '../Hoocks/useFirebase';

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const allContext = useFirebase()
    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;