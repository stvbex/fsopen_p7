import React from 'react'
import BlogCommentsForm from './BlogCommentsForm'

const BlogComments = ({ blog }) => {

  return (
    <div>
      <h3>comments</h3>
      <BlogCommentsForm blogId={blog.id} />
      <ul>
        {blog.comments && blog.comments.map((comment, i) =>
          <li key={i}>{comment}</li>
        )}
      </ul>
    </div>
  )
}

export default BlogComments