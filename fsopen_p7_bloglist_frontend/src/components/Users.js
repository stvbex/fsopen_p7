import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchUsers } from '../reducers/usersReducer'

import {
  Link
} from 'react-router-dom'
import { Table } from 'react-bootstrap'


const Users = () => {
  const users = useSelector(state => state.users)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  return (
    <div>
      <h2>Users</h2>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th></th>
            <th>blogs created</th>
          </tr>
        </thead>
        <tbody>
          {users && users.map(user =>
            <tr key={user.id}>
              <td><Link to={`/users/${user.id}`}>{user.name}</Link></td>
              <td>{user.blogs.length}</td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  )
}

export default Users