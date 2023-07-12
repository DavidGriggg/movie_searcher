import { StyledFavButton } from './styled'

import { useNavigate } from 'react-router-dom'

export const FavButton = () => {
  const navigate = useNavigate()

  const handleNavigateToFavourites = () => {
    navigate('/movie/favourites')
  }

  return (
    <StyledFavButton onClick={handleNavigateToFavourites}>
      Избранное
    </StyledFavButton>
  )
}
