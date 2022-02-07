import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Container, Flex, NavLink } from 'theme-ui'

export const Nav = () => {
  return (
    <Container bg="secondary" sx={{ display: 'flex', width: '100vw' }}>
      <Flex as="nav" sx={{ display: 'flex', width: '100%', paddingX: '2rem' }}>
        <Flex sx={{ display: 'flex', width: '50%', alignItems: 'center', justifyContent: 'start', color: 'white' }}>
          POC REACT
        </Flex>
        <Box sx={{ display: 'flex', width: '50%', justifyContent: 'end' }}>
          <Link to="/">
            <NavLink p={2} sx={{ '&': { color: 'white' }, '&:hover': { color: 'black' } }}>
              Profile
            </NavLink>
          </Link>
          <Link to="/test">
            <NavLink p={2} sx={{ '&': { color: 'white' }, '&:hover': { color: 'black' } }}>
              Edit User
            </NavLink>
          </Link>
          <Link to="/download">
            <NavLink p={2} sx={{ '&': { color: 'white' }, '&:hover': { color: 'black' } }}>
              Download
            </NavLink>
          </Link>
        </Box>
      </Flex>
    </Container>
  )
}
