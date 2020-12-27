import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchBlogs } from '../reducers/blogReducer'

import Blog from './Blog'
import BlogForm from './BlogForm'
import Togglable from './Togglable'

const Blogs = () => {
  const blogs = useSelector(state => state.blogs)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchBlogs())
  }, [dispatch])

  const newBlogToggleRef = useRef()

  return (
    <div>
      <h2>blog app</h2>
      <Togglable buttonLabel='new blog' ref={newBlogToggleRef}>
        <BlogForm parentToggleRef={newBlogToggleRef} />
      </Togglable>

      {blogs.map(blog =>
        <Blog
          key={blog.id}
          blog={blog}
        />
      )}
    </div>
  )
}

export default Blogs