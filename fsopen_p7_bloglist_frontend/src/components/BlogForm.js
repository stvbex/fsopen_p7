import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { createBlog } from '../reducers/blogReducer'
import { setNotification } from '../reducers/notificationReducer'

const BlogForm = ({ parentToggleRef }) => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')

  const dispatch = useDispatch()

  const newBlog = async event => {
    event.preventDefault()

    const newBlogData = {
      title,
      author,
      url
    }

    try {
      await dispatch(createBlog(newBlogData))

      dispatch(setNotification(`a new blog ${newBlogData.title} by ${newBlogData.author} added`, 'success', 5))

      parentToggleRef.current.toggleVisibility()
      setTitle('')
      setAuthor('')
      setUrl('')
    }
    catch (error) {
      dispatch(setNotification(error.message, 'danger', 5))
    }
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={newBlog}>
        <div>
          title:
                    <input
            id='titleInput'
            type='text'
            value={title}
            onChange={event => setTitle(event.target.value)}
          />
        </div>
        <div>
          author:
                    <input
            id='authorInput'
            type='text'
            value={author}
            onChange={event => setAuthor(event.target.value)}
          />
        </div>
        <div>
          url:
                    <input
            id='urlInput'
            type='text'
            value={url}
            onChange={event => setUrl(event.target.value)}
          />
        </div>
        <input id='blogSubmit' type='submit' value='create' />
      </form>
    </div>
  )
}

export default BlogForm