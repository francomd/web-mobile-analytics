import { FC, FormEvent, useRef, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'

export const Login: FC = () => {
    const emailRef = useRef<HTMLInputElement | null>(null)
    const passwordRef = useRef<HTMLInputElement | null>(null)
    const { login } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            setError('')
            setLoading(true)
            if (emailRef.current?.value && passwordRef.current?.value) {
                await login?.(emailRef.current?.value, passwordRef.current?.value)
            }
            navigate('/')
        } catch {
            setError('Failed to log in')
        }

        setLoading(false)
    }

    return (
        <>
            <h2>Log In</h2>
            {error}
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="email" ref={emailRef} required />
                <input type="password" name="password" placeholder="password" ref={passwordRef} required />
                <button disabled={loading} type="submit">
                    Log In
                </button>
            </form>
            <div>
                Need an account? <Link to="/signup">Sign Up</Link>
            </div>
        </>
    )
}
