import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useRouteMatch } from 'react-router-dom'
import { fetchBlogs, updateBlog, removeBlog } from '../reducers/blogReducer'
import { setNotification } from '../reducers/notificationReducer'
import  BlogComments from './BlogComments'

const BlogShow = () => {
  // Fetch blogs
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchBlogs())
  }, [dispatch])
  const blogs = useSelector(state => state.blogs)

  // Select blog
  const match = useRouteMatch()
  const blog = match
    ? blogs.find(b => b.id === match.params.id)
    : null

  const currentUser = useSelector(state => state.currentUser)
  const history = useHistory()

  const handleLike = () => {
    const updatedBlogData = {
      user: blog.user,
      likes: blog.likes + 1,
      author: blog.author,
      title: blog.title,
      url: blog.url,
    }

    dispatch(updateBlog(blog.id, updatedBlogData))
  }

  const handleRemove = async () => {
    let confirmResult = window.confirm(
      `Remove blog ${blog.title} by ${blog.author}`
    )

    if (confirmResult) {
      await dispatch(removeBlog(blog.id))

      dispatch(setNotification(`Removed blog ${blog.title} by ${blog.author}`, 'success', 5))
      history.push('/')
    }
  }

  if (!blog) {
    return null
  }

  return (
    <div>
      <h2>Blog app</h2>
      <h2>{blog.title} {blog.author}</h2>
      <a href={blog.url}>{blog.url}</a> <br />
      {blog.likes} likes <button id='likeButton' onClick={handleLike}>like</button> <br />
      added by {blog.user.name} <br />
      {currentUser.username === blog.user.username
        ? <button id='removeButton' onClick={handleRemove}>remove</button>
        : null
      }

      <BlogComments blog={blog} />
    </div>
  )
}

export default BlogShow