import { createStore, combineReducers, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'

import blogReducer from './reducers/blogReducer'
import notificationReducer from './reducers/notificationReducer'
import currentUserReducer from './reducers/currentUserReducer'
import usersReducer from './reducers/usersReducer'

const reducer = combineReducers({
  blogs: blogReducer,
  notification: notificationReducer,
  currentUser: currentUserReducer,
  users: usersReducer
})

const store = createStore(
  reducer,
  applyMiddleware(ReduxThunk)
)

export default store