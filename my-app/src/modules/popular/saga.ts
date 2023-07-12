import { call, put, takeLatest } from 'redux-saga/effects'

import { POPULAR_API } from '../../core/api/api'
import { popularActions } from './slice'

const apiKey = process.env.REACT_APP_API_KEY

type GetPopularPayload = {
  genreId: number | undefined
  page: number
}

function* getPopular({
  payload,
}: {
  payload: GetPopularPayload
}): Generator<any, void, any> {
  try {
    const response: any =
      payload === undefined
        ? yield call(
            POPULAR_API.get,
            `movie/popular?api_key=${apiKey}&language=ru`,
          )
        : yield call(
            POPULAR_API.get,
            `discover/movie?api_key=${apiKey}&language=ru&with_genres=${payload.genreId}&page=${payload.page}`,
          )
    yield put(popularActions.setPopular(response.data.results))
  } catch (error) {
    alert(error)
  }
}

export function* watchGetPopular() {
  //@ts-ignore
  yield takeLatest(popularActions.requestPopular.type, getPopular)
}
