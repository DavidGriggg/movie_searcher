import axios from 'axios'

export const MOVIES_API_URL = 'https://api.themoviedb.org/3/search/'
export const POPULAR_API_URL = 'https://api.themoviedb.org/3/'

export const MOVIES_API = axios.create({
  baseURL: MOVIES_API_URL,
})
export const POPULAR_API = axios.create({
  baseURL: POPULAR_API_URL,
})
