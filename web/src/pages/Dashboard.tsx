import { FC, useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

export const Dashboard: FC = () => {
    const [error, setError] = useState('')
    const { currentUser, logout } = useAuth()
    const navigate = useNavigate()

    async function handleLogout() {
        setError('')

        try {
            await logout?.()
            navigate('/login')
        } catch {
            setError('Failed to log out')
        }
    }

    useEffect(() => {
        document.title = 'Home'
    }, [])

    return (
        <>
            <h2>Profile</h2>
            {error}
            <strong>Email:</strong> {currentUser.email}
            <div>
                <button onClick={handleLogout}>Log Out</button>
            </div>
        </>
    )
}
