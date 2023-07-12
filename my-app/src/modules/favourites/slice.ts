import {
  createSlice,
  createEntityAdapter,
  PayloadAction,
} from '@reduxjs/toolkit'

import { Movie } from '../movies/types'

export const favouritesAdapter = createEntityAdapter<Movie>({
  selectId: favourite => favourite.id,
})

const favouritesData = localStorage.getItem('favourites') || ''

const initialState = !favouritesData
  ? favouritesAdapter.getInitialState()
  : JSON.parse(favouritesData)

export const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    setFavourite(state, action: PayloadAction<Movie>) {
      favouritesAdapter.addOne(state, action.payload)
    },
    removeFavourite(state, action: PayloadAction<number>) {
      favouritesAdapter.removeOne(state, action.payload)
    },
  },
})

export const favouritesActions = favouritesSlice.actions
