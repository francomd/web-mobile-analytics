import { ReactNode } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

interface IProtectedRouteProps {
    isPrivate?: boolean
    children: ReactNode
}

export const ProtectedRoute = ({ isPrivate, children }: IProtectedRouteProps) => {
    const { currentUser } = useAuth()
    let location = useLocation()

    if (currentUser && location.pathname === '/login') return <Navigate to="/" />
    if (!isPrivate) return <>{children}</>

    return currentUser ? <>{children}</> : <Navigate to="/login" />
}
