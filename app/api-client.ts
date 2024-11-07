import axios from 'axios'

const api = axios.create({
  baseURL: 'https://express-v4.vercel.app',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Basic dGVzdDp0ZXN0'
  },
})

export const fetchUsers = async () => {
  const response = await api.get('/users')
  return response.data
}

export const fetchPosts = async () => {
  const response = await api.get('/posts')
  return response.data
}

export const fetchComments = async () => {
  const response = await api.get('/comments')
  return response.data
}