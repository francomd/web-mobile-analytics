import { FC, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Box, Button, Flex, Input } from 'theme-ui'
import { Nav } from '../../components/Nav/Nav'
import { useAuth } from '../../context/AuthContext'

export const EditUser: FC = () => {
  const emailRef = useRef<HTMLInputElement | null>(null)
  const passwordRef = useRef<HTMLInputElement | null>(null)
  const passwordConfirmRef = useRef<HTMLInputElement | null>(null)

  const { currentUser, updateUserPassword, updateUserEmail } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleUpdateProfile = async (e: any) => {
    e.preventDefault()

    if (passwordRef.current?.value !== passwordConfirmRef.current?.value) {
      return setError('Please check the password')
    }

    const promise: Array<Promise<void>> = []
    setLoading(true)
    setError('')

    if (emailRef.current?.value !== currentUser.email) {
      const emailChanged = updateUserEmail?.(emailRef.current?.value!)
      promise.push(emailChanged!)
    }
    if (passwordConfirmRef.current?.value) {
      const passwordChanged = updateUserPassword?.(passwordRef.current?.value!)
      promise.push(passwordChanged!)
    }

    Promise.all(promise)
      .then(() => navigate('/'))
      .catch(() => {
        setError('Failed to update account')
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <>
      <Nav />
      <Flex sx={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'column', height: '100vh' }}>
        <h2>Update Profile</h2>
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
          <Box as="form" onSubmit={handleUpdateProfile}>
            <Input
              placeholder="Email"
              type="email"
              name="email"
              mb={3}
              defaultValue={currentUser.email}
              disabled={true}
            />
            <Input type="password" ref={passwordRef} placeholder="Leave blank to keep the same" mb={3} />
            <Input type="password" ref={passwordConfirmRef} placeholder="Leave blank to keep the same" mb={3} />
            <Button disabled={loading} type="submit" sx={{ width: '100%' }}>
              Update Profile
            </Button>
          </Box>
        </Flex>

        <Flex sx={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }} mt={3}>
          <Link to="/">Cancel</Link>
        </Flex>
      </Flex>
    </>
  )
}
