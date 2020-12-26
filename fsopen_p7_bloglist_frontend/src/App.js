import React from 'react'
import { useSelector } from 'react-redux'

import Header from './components/Header'
import Blogs from './components/Blogs'
import LoginForm from './components/LoginForm'
import Users from './components/Users'

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
        <Header />

        <Switch>
          <Route path='/users'>
            <Users />
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