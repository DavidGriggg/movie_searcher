import { Container, StyledTitle, Vote, Desc } from './styled'
import { Button } from '../../ui/Button/Button'
import { AddButton } from './components/AddButton/AddButton'
import { AddedWindow } from './components/AddedWindow/AddedWindow'

import { Movie as MovieType } from '../../modules/movies/types'
import { RootState, useDispatch } from '../../modules'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

import { favouritesActions } from '../../modules/favourites/slice'
import { moviesAdapter } from '../../modules/movies/slice'

export const Movie = () => {
  const [isAdding, setIsAdding] = useState(false)
  const [buttonDisabled, setButtonDisabled] = useState(false)
  const dispatch = useDispatch()

  const { movieId } = useParams()

  const selectedMovie: MovieType = useSelector(
    (state: RootState) =>
      moviesAdapter.getSelectors().selectById(state.movies, movieId!)!,
  )

  const favourites = useSelector((state: RootState) => state.favourites)

  useEffect(() => {
    localStorage.setItem('favourites', JSON.stringify(favourites))
  }, [favourites])

  const handleAddToFavourites = () => {
    dispatch(favouritesActions.setFavourite(selectedMovie))
    setIsAdding(true)
    document.body.style.overflow = 'hidden'
    setButtonDisabled(true)
  }

  return (
    <Container>
      <StyledTitle>
        {selectedMovie?.title}
        {selectedMovie.release_date !== ''
          ? ' (' + selectedMovie?.release_date.slice(0, 4) + ')'
          : ''}
      </StyledTitle>
      <img
        src={`https://image.tmdb.org/t/p/w300${selectedMovie?.poster_path}`}
        alt='poster'
      />
      <Desc>
        <b>Краткое описание:</b> {selectedMovie?.overview}
      </Desc>
      <Vote>
        <b>Средняя оценка:</b>
        {selectedMovie?.vote_average !== 0
          ? ' ' + selectedMovie.vote_average
          : ' неизвестна'}
      </Vote>

      <AddButton handleAddToFavourites={handleAddToFavourites} />
      <Button buttonDisabled={buttonDisabled} />
      {isAdding ? (
        <AddedWindow
          setIsAdding={setIsAdding}
          setButtonDisabled={setButtonDisabled}
        />
      ) : (
        ''
      )}
    </Container>
  )
}
