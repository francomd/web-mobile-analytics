import { FC, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../context/AuthContext'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { Box, Flex, Input } from 'theme-ui'
import { Button } from '../../components/Button/Button'

export const SingupNew: FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSingup = async (e: any) => {
    e.preventDefault()

    if (password !== passwordConfirm) {
      setError('Passwords dont match')
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
    <Flex sx={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'column', height: '100vh' }}>
      <h2>SingUp</h2>
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
        <Box as="form" onSubmit={handleSingup}>
          <Input
            placeholder="Email"
            type="email"
            name="email"
            mb={3}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            placeholder="Password"
            type="password"
            name="password"
            mb={3}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            placeholder="Password Confirm"
            type="password"
            name="passwordConfirm"
            mb={3}
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
          <Button disabled={loading} type="submit">
            Sing Up
          </Button>
        </Box>
      </Flex>

      <Flex sx={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }} mt={3}>
        Have an account? <Link to="/login">Log In</Link>
      </Flex>
    </Flex>
  )
}
