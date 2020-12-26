import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { loginUser } from '../reducers/currentUserReducer'
import { setNotification } from '../reducers/notificationReducer'

const LoginForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const handleLogin = async event => {
    event.preventDefault()

    try {
      dispatch(loginUser(username, password))

      setUsername('')
      setPassword('')
    }
    catch (error) {
      dispatch(setNotification(error, 'red', 5))
    }
  }

  return (
    <form onSubmit={handleLogin}>
      <h2>log in to application</h2>
      <div>
        username
            <input
          id='username-input'
          type='text'
          value={username}
          onChange={event => setUsername(event.target.value)}
        />
      </div>
      <div>
        password
            <input
          id='password-input'
          type='password'
          value={password}
          onChange={event => setPassword(event.target.value)}
        />
      </div>
      <input id='login-button' type='submit' value='login' />
    </form>
  )
}

export default LoginForm