import { useNavigate } from 'react-router-dom'

import {
  Container,
  StyledTitle,
  ItemsContainer,
  Item,
  DeleteButton,
  DeleteIcon,
  TextIfEmpty,
} from './styled'

import { Button } from '../../ui/Button/Button'
import deleteBTN from './images/delete.svg'

import { Movie } from '../../modules/movies/types'
import { moviesActions } from '../../modules/movies/slice'
import { favouritesActions } from '../../modules/favourites/slice'

import { RootState, useDispatch } from '../../modules'
import { MouseEvent, useEffect } from 'react'
import { useSelector } from 'react-redux'

export const Favourites = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const favourites = useSelector((state: RootState) => state.favourites)

  const handleShowFavourite = (favourite: Movie) => {
    dispatch(moviesActions.setMovie(favourite))
    navigate(`/movie/${favourite.id}`)
  }

  useEffect(() => {
    localStorage.setItem('favourites', JSON.stringify(favourites))
  }, [favourites])

  const handleDeleteFromFavourites = (
    event: MouseEvent<HTMLButtonElement>,
    id: number,
  ) => {
    event.stopPropagation()
    dispatch(favouritesActions.removeFavourite(id))
  }

  const formattedTitle = (id: number) => {
    const slicedFavMovie = favourites.entities[id].title.slice(0, 23)
    return (
      slicedFavMovie +
      (slicedFavMovie.endsWith('?') ||
      slicedFavMovie.endsWith('.') ||
      slicedFavMovie.length < 23
        ? ''
        : '...')
    )
  }

  return (
    <Container>
      <StyledTitle>Избранное</StyledTitle>
      <ItemsContainer>
        {favourites.ids.length === 0 ? (
          <TextIfEmpty>В ваших избранных еще нет фильмов :(</TextIfEmpty>
        ) : (
          favourites?.ids.map((id: number) => {
            return (
              <Item
                key={favourites.entities[id].id}
                onClick={() => handleShowFavourite(favourites.entities[id])}
              >
                {formattedTitle(favourites.entities[id].id)}
                <DeleteButton
                  onClick={event => handleDeleteFromFavourites(event, id)}
                >
                  <DeleteIcon src={deleteBTN} alt='delete' />
                </DeleteButton>
              </Item>
            )
          })
        )}
      </ItemsContainer>
      <Button buttonDisabled={false} />
    </Container>
  )
}
