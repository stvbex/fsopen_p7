import React, { useState } from 'react'
import { createBlog } from '../reducers/blogReducer'
import { useDispatch } from 'react-redux'

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

        dispatch(createBlog(newBlogData))

        parentToggleRef.current.toggleVisibility()
        setTitle('')
        setAuthor('')
        setUrl('')

        // TODO: notify on invalid data ????
        // dispatch(setNotification(error, 'red', 5))
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