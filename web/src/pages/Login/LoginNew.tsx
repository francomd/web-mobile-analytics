import { FC, useRef, useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button/Button'
import { Flex, Input, Box } from 'theme-ui'

export const LoginNew: FC = () => {
  const emailRef = useRef<HTMLInputElement | null>(null)
  const passwordRef = useRef<HTMLInputElement | null>(null)
  const { login } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e: any) => {
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
    <Flex sx={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'column', height: '100vh' }}>
      <h2>Log In</h2>
      <Flex
        p={4}
        sx={{
          borderRadius: 'sm',
          border: '1px solid',
          borderColor: 'primary',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        {error}
        <Box as="form" onSubmit={handleSubmit}>
          <Input placeholder="Email" type="email" name="email" mb={3} ref={emailRef} />
          <Input placeholder="Password" type="password" name="password" mb={3} ref={passwordRef} />
          <Button disabled={loading} type="submit">
            Log In
          </Button>
        </Box>
      </Flex>
      <Flex sx={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }} mt={3}>
        Need an account? <Link to="/signup">Sign Up</Link>
      </Flex>
    </Flex>
  )
}
