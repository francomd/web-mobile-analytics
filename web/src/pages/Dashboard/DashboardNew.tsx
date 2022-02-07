import { FC, useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { Box, Flex } from 'theme-ui'
import { Button as Btn } from '../../components/Button/Button'
import { Nav as Menu } from '../../components/Nav/Nav'

export const DashboardNew: FC = () => {
  const [error, setError] = useState('')
  const { currentUser, logout } = useAuth()
  const navigate = useNavigate()

  async function handleLogout() {
    setError('')
    try {
      await logout?.()
      navigate('/login')
    } catch {
      setError('Failed to logout')
    }
  }

  return (
    <>
      <Menu />
      <Flex p={4} sx={{ height: '100vh', alignItems: 'center', justifyContent: 'center' }}>
        {error}
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
          <h2>Profile</h2>
          <Box py={3}>
            <strong>Email: {currentUser.email}</strong>
          </Box>
          <Btn onClick={handleLogout}>Logout</Btn>
        </Flex>
      </Flex>
    </>
  )
}
