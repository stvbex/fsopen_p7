import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { logoutUser } from '../reducers/currentUserReducer'

import { Nav, Navbar } from 'react-bootstrap'

const Navigation = () => {

  const currentUser = useSelector(state => state.currentUser)
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logoutUser())
    window.location.reload()
  }

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href='/'>home</Nav.Link>
          <Nav.Link href='/users'>users</Nav.Link>
        </Nav>
        <Navbar.Text>
          {currentUser.name} logged in <button onClick={handleLogout}>logout</button>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation