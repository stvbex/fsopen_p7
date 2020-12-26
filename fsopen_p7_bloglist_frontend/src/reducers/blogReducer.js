import { setNotification } from './notificationReducer'

import blogService from '../services/blogService'

const blogReducer = (state = [], action) => {
  console.log('action:', action)

  switch (action.type) {
    case 'FETCH_BLOGS':
      return action.data

    case 'NEW_BLOG':
      // Add new blog
      state = state.concat(action.data)

      // Sort blogs
      state.sort((b1, b2) => b2.likes - b1.likes)

      return state

    case 'UPDATE_BLOG':
      // Copy blogs
      state = [...state]

      // Update selected blog
      const updatedIndex = state.findIndex(b => b.id === action.data.id)
      state[updatedIndex] = action.data

      // Sort blogs
      state.sort((b1, b2) => b2.likes - b1.likes)

      return state

    case 'REMOVE_BLOG':
      // Copy blogs
      state = [...state]

      // Remove selected blog
      const removeIndex = state.findIndex(b => b.id === action.data.blogId)
      state.splice(removeIndex, 1)
    
      return state

    default:
      return state
  }
}

export const fetchBlogs = () => {
  return async dispatch => {
    let blogs = await blogService.getAll()
    blogs.sort((b1, b2) => b2.likes - b1.likes)

    dispatch({
      type: 'FETCH_BLOGS',
      data: blogs
    })
  }
}

export const createBlog = newBlogData => {
  return async dispatch => {
    const newBlog = await blogService.createOne(newBlogData)

    dispatch({
      type: 'NEW_BLOG',
      data: newBlog
    })

    dispatch(setNotification(`a new blog ${newBlog.title} by ${newBlog.author} added`, 'green', 5))
  }
}

export const updateBlog = (blogId, updatedBlogData) => {
  return async dispatch => {
    const updatedBlog = await blogService.updateOne(blogId, updatedBlogData)

    dispatch({
      type: 'UPDATE_BLOG',
      data: updatedBlog
    })

    // TODO? notify
  }
}

export const removeBlog = blogId => {
  return async dispatch => {
    await blogService.deleteOne(blogId)

    dispatch({
      type: 'REMOVE_BLOG',
      data: { blogId }
    })
  }
}

export default blogReducer