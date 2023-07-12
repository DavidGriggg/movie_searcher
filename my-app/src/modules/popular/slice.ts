import {
  createSlice,
  createEntityAdapter,
  PayloadAction,
} from '@reduxjs/toolkit'

import { REQUEST_STATUS } from '../../core/api/types'
import { Movie } from '../movies/types'

export const popularAdapter = createEntityAdapter<Movie>({
  selectId: popular => popular.id,
})

export const popularSlice = createSlice({
  name: 'popular',
  initialState: popularAdapter.getInitialState({
    status: REQUEST_STATUS.INITIAL,
  }),
  reducers: {
    requestPopular: state => {
      state.status = REQUEST_STATUS.LOADING
    },
    setPopular(state, action: PayloadAction<Movie[]>) {
      state.status = REQUEST_STATUS.SUCCESS
      popularAdapter.setAll(state, action.payload)
    },
  },
})

export const popularActions = popularSlice.actions
