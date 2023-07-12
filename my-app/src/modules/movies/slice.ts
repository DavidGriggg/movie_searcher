import {
  createSlice,
  createEntityAdapter,
  PayloadAction,
} from '@reduxjs/toolkit'

import { REQUEST_STATUS } from '../../core/api/types'
import { Movie } from './types'

export const moviesAdapter = createEntityAdapter<Movie>({
  selectId: movie => movie.id,
})

export const moviesSlice = createSlice({
  name: 'movies',
  initialState: moviesAdapter.getInitialState({
    status: REQUEST_STATUS.INITIAL,
  }),
  reducers: {
    requestMovies: state => {
      state.status = REQUEST_STATUS.LOADING
    },
    setMovies(state, action: PayloadAction<Movie[]>) {
      state.status = REQUEST_STATUS.SUCCESS
      moviesAdapter.setAll(state, action.payload)
    },
    clearMovies: moviesAdapter.removeAll,
    setMovie(state, action: PayloadAction<Movie>) {
      moviesAdapter.addOne(state, action.payload)
    },
  },
})

export const moviesActions = moviesSlice.actions
