import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { logoutUser } from '../reducers/currentUserReducer'

const Navigation = () => {

  const currentUser = useSelector(state => state.currentUser)
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logoutUser())
    window.location.reload()
  }

  const padding = {
    padding: 5
  }

  return (
    <div>
      <Link to='/' style={padding}>home</Link>
      <Link to='/users' style={padding}>users</Link>
      {currentUser.name} logged in <button onClick={handleLogout}>logout</button>
    </div>
  )
}

export default Navigation