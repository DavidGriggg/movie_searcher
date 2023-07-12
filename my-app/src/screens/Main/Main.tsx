import { useState, useCallback, useEffect, useRef, ChangeEvent } from 'react'
import { useDispatch } from '../../modules'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { debounce } from 'debounce'

import { RootState } from '../../modules'

import { moviesActions } from '../../modules/movies/slice'
import { moviesAdapter } from '../../modules/movies/slice'
import { SearchItem, StyledInput, StyledTitle, ButtonsWrapper } from './styled'
import { FavButton } from './components/FavButton/FavButton'
import { PopularButton } from './components/PopularButton/PopularButton'

export const Main = () => {
  const [inputValue, setInputValue] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  const handleSetInputValue = debounce(
    (event: ChangeEvent<HTMLInputElement>) => {
      return setInputValue(event.target.value)
    },
    400,
  )

  const movies = useSelector((state: RootState) =>
    moviesAdapter.getSelectors().selectAll(state.movies),
  )

  const search = useCallback(
    (value: any) => {
      dispatch(moviesActions.requestMovies(value))
    },
    [dispatch],
  )

  const clear = useCallback(() => dispatch(moviesActions.clearMovies()), [
    dispatch,
  ])

  useEffect(() => {
    if (inputValue.trim() === '') {
      clear()
      return
    }
    if (inputValue !== '') {
      search(inputValue)
    }
  }, [inputValue])

  const handleNavigateToMovie = (movieId: number) => {
    navigate(`/movie/${movieId}`)
  }

  return (
    <>
      <StyledTitle>Поисковик фильмов</StyledTitle>
      <ButtonsWrapper>
        <FavButton />
        <PopularButton />
      </ButtonsWrapper>
      <StyledInput
        ref={inputRef}
        placeholder='введите фильм...'
        onChange={handleSetInputValue}
      />
      {movies.map(movie => (
        <SearchItem
          key={movie.id}
          onClick={() => handleNavigateToMovie(movie.id)}
        >
          {movie.release_date !== ''
            ? movie.title + ' (' + movie.release_date.slice(0, 4) + ')'
            : movie.title}
        </SearchItem>
      ))}
    </>
  )
}
