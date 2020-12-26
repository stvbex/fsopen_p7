import blogService from '../services/blogService'
import loginService from '../services/loginService'

const currentUserReducer = (state = null, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      window.localStorage.setItem(
        'loggedInUser', JSON.stringify(action.data)
      )
      blogService.setAuthToken(action.data.token)

      return action.data

    case 'LOGOUT_USER':
      window.localStorage.removeItem('loggedInUser')
      blogService.setAuthToken(undefined)

      return null

    default:
      const loggedInUserJSON = window.localStorage.getItem('loggedInUser')
      if (loggedInUserJSON) {
        const user = JSON.parse(loggedInUserJSON)
        blogService.setAuthToken(user.token)
        return user
      }

      return state
  }
}

export const loginUser = (username, password) => {
  return async dispatch => {
    const user = await loginService.login({
      username,
      password
    })

    dispatch({
      type: 'LOGIN_USER',
      data: user
    })
  }
}

export const logoutUser = () => {
  return async dispatch => {
    dispatch({
      type: 'LOGOUT_USER'
    })
  }
}

export default currentUserReducer