import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
    onAuthStateChanged, 
    signOut, 
    GoogleAuthProvider, 
    signInWithPopup 
} from 'firebase/auth';
import { auth } from '../firebase'; // Aapki firebase config file

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // 1. Google Login Function
    const loginWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            return result.user;
        } catch (error) {
            console.error("Google Login Error:", error.message);
            throw error;
        }
    };

    // 2. Logout Function
    const logout = async () => {
        try {
            await signOut(auth);
            // Local storage ki zarurat nahi, Firebase handles this
        } catch (error) {
            console.error("Logout Error:", error.message);
        }
    };

    // 3. Listen to Auth State (Main Logic)
    // Firebase apne aap check karta hai ki user logged in hai ya nahi
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ 
            user, 
            isLoggedIn: !!user, 
            loginWithGoogle, 
            logout, 
            loading 
        }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);