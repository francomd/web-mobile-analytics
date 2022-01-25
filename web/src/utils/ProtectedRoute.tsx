import { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

interface IProtectedRouteProps {
    isPrivate?: boolean
    children: ReactNode
}

export const ProtectedRoute = ({ isPrivate, children }: IProtectedRouteProps) => {
    const { currentUser } = useAuth()

    if (!isPrivate) return <>{children}</>

    return currentUser ? <>{children}</> : <Navigate to="/login" />
}
