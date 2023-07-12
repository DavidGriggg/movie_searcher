import { call, put, takeLatest } from 'redux-saga/effects'

import { MOVIES_API } from '../../core/api/api'
import { moviesActions } from './slice'

const apiKey = process.env.REACT_APP_API_KEY

type GetMoviesPayload = {
  inputValue: string
}

function* getMovies({
  payload,
}: {
  payload: GetMoviesPayload
}): Generator<object> {
  try {
    const response: any = yield call(
      MOVIES_API.get,
      `movie?api_key=${apiKey}&language=ru&query=${payload}`,
    )

    yield put(moviesActions.setMovies(response.data.results.slice(0, 7)))
  } catch (error) {
    alert(error)
  }
}

export function* watchGetMovies() {
  //@ts-ignore
  yield takeLatest(moviesActions.requestMovies.type, getMovies)
}
