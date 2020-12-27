import React from 'react'
import { useSelector } from 'react-redux'

import Navigation from './components/Navigation'
import Notification from './components/Notification'

import Blogs from './components/Blogs'
import BlogShow from './components/BlogShow'
import LoginForm from './components/LoginForm'
import Users from './components/Users'
import UserShow from './components/UserShow'

import {
  Route,
  Switch
} from 'react-router-dom'

import './App.css'

const App = () => {
  const currentUser = useSelector(state => state.currentUser)

  if (currentUser) {
    return (
      <div>
        <Navigation />
        <Notification />

        <Switch>
          <Route path='/users/:id'>
            <UserShow />
          </Route>
          <Route path='/users'>
            <Users />
          </Route>
          <Route path='/blogs/:id'>
            <BlogShow />
          </Route>
          <Route path='/'>
            <Blogs />
          </Route>
        </Switch>
      </div>
    )
  }

  return (
    <div>
      <div id='login-div'>
        <LoginForm />
      </div>
    </div>
  )
}

export default App