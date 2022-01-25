import { FC, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../context/AuthContext'
import { createUserWithEmailAndPassword } from 'firebase/auth'

export const SignUp: FC = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async (e: any) => {
        e.preventDefault()

        if (password !== passwordConfirm) {
            setError('Passwords dont match')
            return
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                setLoading(true)
                navigate('/')
            })
            .catch((error) => {
                console.log(error)
            })

        setLoading(false)
    }

    return (
        <>
            <h2>Sign Up</h2>
            {error}
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="password"
                    value={passwordConfirm}
                    onChange={(e) => setPasswordConfirm(e.target.value)}
                    required
                />
                <button disabled={loading} type="submit">
                    Sign Up
                </button>
            </form>
            <div>
                Already have an account? <Link to="/login">Log In</Link>
            </div>
        </>
    )
}
