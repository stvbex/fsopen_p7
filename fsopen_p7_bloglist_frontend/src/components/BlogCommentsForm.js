import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { createComment } from '../reducers/blogReducer'

const BlogCommentsForm = ({ blogId }) => {
  const [content, setContent] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = async event => {
    event.preventDefault()
    
    dispatch(createComment(blogId, content))

    setContent('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' value={content} onChange={event => setContent(event.target.value)}></input>
      <button type='submit'>add comment</button>
    </form>
  )
}

export default BlogCommentsForm