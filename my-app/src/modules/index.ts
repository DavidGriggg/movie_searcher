import { useDispatch as useReduxDispatch } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { all } from 'redux-saga/effects'

import { moviesSlice } from './movies/slice'
import { favouritesSlice } from './favourites/slice'
import { popularSlice } from './popular/slice'

import { watchGetMovies as watchGetMoviesSaga } from './movies/saga'
import { watchGetPopular as watchGetPopularSaga } from './popular/saga'

export const rootReducer = combineReducers({
  movies: moviesSlice.reducer,
  favourites: favouritesSlice.reducer,
  popular: popularSlice.reducer,
})

function* rootSaga() {
  yield all([watchGetMoviesSaga(), watchGetPopularSaga()])
}

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga)

export const useDispatch: () => AppDispatch = useReduxDispatch

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
