import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Notification from './Notification'

import { logoutUser } from '../reducers/currentUserReducer'

const Header = () => {
  const currentUser = useSelector(state => state.currentUser)
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logoutUser())
    window.location.reload()
  }

  return (
    <div>
      <h2>blogs</h2>
      <Notification />
      <div>
        {currentUser.name} logged in
          <button onClick={handleLogout}>logout</button>
      </div>
    </div>
  )
}

export default Header