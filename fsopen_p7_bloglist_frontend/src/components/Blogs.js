import React, { useEffect, useRef } from 'react'
import { ListGroup } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchBlogs } from '../reducers/blogReducer'

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
      <h2>Blog app</h2>
      <Togglable buttonLabel='new blog' ref={newBlogToggleRef}>
        <BlogForm parentToggleRef={newBlogToggleRef} />
      </Togglable>

      <ListGroup as='ul' variant='flush'>
        {blogs.map(blog => 
          <ListGroup.Item key={blog.id}>
            <Link to={`/blogs/${blog.id}`}>{blog.title} {blog.author}</Link>
          </ListGroup.Item>
        )}
      </ListGroup>
    </div>
  )
}

export default Blogs