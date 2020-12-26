import usersService from '../services/usersService'

const usersReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_USERS':
      return action.data

    default:
      return state
  }
}

export const fetchUsers = () => {
  return async dispatch => {
    const users = await usersService.getAll()

    dispatch({
      type: 'FETCH_USERS',
      data: users
    })
  }
}

export default usersReducer