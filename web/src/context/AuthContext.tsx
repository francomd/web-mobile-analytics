import { initializeApp, getApps, getApp, FirebaseOptions } from 'firebase/app'
import React, { useState, useEffect, useContext } from 'react'
import {
    getAuth,
    signInWithEmailAndPassword,
    signOut,
    sendPasswordResetEmail,
    updateEmail,
    updatePassword,
    onAuthStateChanged,
    User,
    UserCredential,
} from 'firebase/auth'

const REACT_APP_FIREBASE_CONFIG = process.env.REACT_APP_FIREBASE_CONFIG || ''
const firebaseConfig = JSON.parse(REACT_APP_FIREBASE_CONFIG) as FirebaseOptions

console.info(
    firebaseConfig?.apiKey ? 'Using Firebase config from env' : 'Please add the Firebase config to your .env file'
)

//Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp()

export const auth = getAuth(app)

interface IAuthContext {
    login?: (email: string, password: string) => Promise<UserCredential>
    logout?: () => Promise<void>
    resetPassword?: (email: string) => Promise<void>
    updateUserEmail?: (email: string) => Promise<void>
    updateUserPassword?: (password: string) => Promise<void>
    currentUser?: any
}

export const AuthContext = React.createContext<IAuthContext>({})

export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthProvider: React.FC = ({ children }) => {
    const [currentUser, setCurrentUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)

    const login = (email: string, password: string) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        return signOut(auth)
    }

    const resetPassword = (email: string) => {
        return sendPasswordResetEmail(auth, email)
    }

    const updateUserEmail = (email: string) => {
        return updateEmail(currentUser!, email)
    }

    const updateUserPassword = (password: string) => {
        return updatePassword(currentUser!, password)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user: any) => {
            setCurrentUser(user)
            setLoading(false)
        })

        return unsubscribe
    }, [])

    const value = {
        currentUser,
        login,
        logout,
        resetPassword,
        updateUserEmail,
        updateUserPassword,
    }

    return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>
}
