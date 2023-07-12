import {
  StyledTitle,
  GenreButton,
  GenreButtonsWrapper,
  PopularContainer,
  PopularItem,
  PopularItemRight,
  PopularItemTitle,
  PopularItemVote,
} from './styled'
import { Image } from './components/Image/Image'
import { Button } from '../../ui/Button/Button'
import { PopularPagination } from './components/Pagination/PopularPagination'

import { useSelector } from 'react-redux'
import { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RootState, useDispatch } from '../../modules'
import { popularActions, popularAdapter } from '../../modules/popular/slice'
import { moviesActions } from '../../modules/movies/slice'
import { Movie } from '../../modules/movies/types'

const GENRES = [
  { id: 35, name: 'Комедия' },
  { id: 14, name: 'Фантастика' },
  { id: 27, name: 'Ужасы' },
  { id: 28, name: 'Боевик' },
  { id: 10749, name: 'Мелодрама' },
]

export const Popular = () => {
  const [genreId, setGenreId] = useState(undefined)
  const [page, setPage] = useState(1)
  const [selectedGenre, setSelectedGenre] = useState(null)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const populars = useSelector((state: RootState) =>
    popularAdapter.getSelectors().selectAll(state.popular),
  )

  const search = useCallback(
    (genreId: number | undefined, page: number) => {
      dispatch(popularActions.requestPopular({ genreId, page } as any))
    },
    [dispatch],
  )

  const handleChooseGenre = (genreId: any) => () => {
    setGenreId(genreId)
    setPage(1)
    setSelectedGenre(genreId)
  }

  useEffect(() => {
    search(genreId, page)
  }, [page, genreId])

  if (populars.length === 0) {
    search(undefined, 1)
  }

  const handleNavigatePopular = (popular: Movie) => {
    dispatch(moviesActions.setMovie(popular))
    navigate(`/movie/${popular.id}`)
  }

  return (
    <>
      <StyledTitle>Популярные фильмы</StyledTitle>
      <GenreButtonsWrapper>
        {GENRES.map(genre => (
          <GenreButton
            key={genre.id}
            className={selectedGenre === genre.id ? 'selected' : ''}
            onClick={handleChooseGenre(genre.id)}
          >
            {genre.name}
          </GenreButton>
        ))}
      </GenreButtonsWrapper>
      {populars.map(popular => {
        return (
          <PopularContainer key={popular.id}>
            <PopularItem onClick={() => handleNavigatePopular(popular)}>
              <Image poster={popular.poster_path} />
              <PopularItemRight>
                <PopularItemTitle>{popular.title}</PopularItemTitle>
                <PopularItemVote>
                  Оценка:
                  {popular.vote_average !== 0
                    ? ' ' + popular.vote_average
                    : ' неизвестна'}
                </PopularItemVote>
              </PopularItemRight>
            </PopularItem>
          </PopularContainer>
        )
      })}
      <PopularPagination
        page={page}
        setPage={setPage}
        genreId={genreId}
        handleChooseGenre={handleChooseGenre}
      />
      <Button buttonDisabled={false} />
    </>
  )
}
