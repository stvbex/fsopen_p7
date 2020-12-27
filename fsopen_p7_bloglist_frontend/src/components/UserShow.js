import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouteMatch } from 'react-router-dom'
import { fetchUsers } from '../reducers/usersReducer'

const UserShow = () => {
  // Fetch users
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])
  const users = useSelector(state => state.users)

  // Select user
  const match = useRouteMatch()
  const user = match
    ? users.find(u => u.id === match.params.id)
    : null

  if (!user) {
    return null
  }

  return (
    <div>
      <h2>{user.name}</h2>
      <b>added blogs</b>
      <ul>
        {user.blogs.map(b => <li key={b.id}>{b.title}</li>)}
      </ul>
    </div>
  )
}

export default UserShow