import axios from 'axios'
const baseUrl = '/api/blogs'

let authToken

const setAuthToken = token => {
  authToken = token
}

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createOne = async newBlogData => {
  const config = {
    headers: {
      authorization: 'bearer ' + authToken
    }
  }
  const newBlog = await axios.post(baseUrl, newBlogData, config)
  return newBlog.data
}

const updateOne = async (blogId, updatedBlogData) => {
  const updatedBlog = await axios.put(baseUrl + '/' + blogId, updatedBlogData)
  return updatedBlog.data
}

const deleteOne = async blogId => {
  const config = {
    headers: {
      authorization: 'bearer ' + authToken
    }
  }
  await axios.delete(baseUrl + '/' + blogId, config)
}

const addComment = async (blogId, comment) => {
  const config = {
    headers: {
      authorization: 'bearer ' + authToken
    }
  }
  const blog = await axios.post(`${baseUrl}/${blogId}/comments`, { comment }, config)
  
  return blog.data
}

export default {
  setAuthToken,
  getAll,
  createOne,
  updateOne,
  deleteOne,
  addComment
}