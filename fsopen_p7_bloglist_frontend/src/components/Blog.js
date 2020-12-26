import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateBlog, removeBlog } from '../reducers/blogReducer'

const Blog = ({ blog }) => {
    const [detailsVisible, setDetailsVisible] = useState(false)

    const currentUser = useSelector(state => state.currentUser)
    const dispatch = useDispatch()

    const toggleVisibility = () => {
        setDetailsVisible(!detailsVisible)
    }

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

    const handleRemove = () => {
        let confirmResult = window.confirm(
            `Remove blog ${blog.title} by ${blog.author}`
        )
        if (confirmResult) {
            dispatch(removeBlog(blog.id))
        }
    }

    const blogStyle = {
        paddingTop: 10,
        paddingLeft: 2,
        border: 'solid',
        borderWidth: 1,
        marginBottom: 5
    }

    return (
        <div className='blog' style={blogStyle}>
            <div>
                {blog.title} {blog.author}
                {detailsVisible
                    ? <input id='hideButton' type='button' value='hide' onClick={toggleVisibility} />
                    : <input id='viewButton' type='button' value='view' onClick={toggleVisibility} />
                }

            </div>
            {detailsVisible &&
                <div>
                    {blog.url} <br />
                    likes {blog.likes}
                    <input id='likeButton' type='button' value='like' onClick={handleLike} /> <br />
                    {blog.user.name} <br />
                    {currentUser.username === blog.user.username
                        ? <input id='removeButton' type='button' value='remove' onClick={handleRemove} />
                        : null
                    }
                </div>
            }
        </div>
    )
}

export default Blog
