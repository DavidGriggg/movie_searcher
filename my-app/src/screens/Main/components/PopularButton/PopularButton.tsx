import { StyledPopularButton } from './styled'

import { useNavigate } from 'react-router-dom'

export const PopularButton = () => {
  const navigate = useNavigate()

  const handleNavigateToPopular = () => {
    navigate('/movie/popular')
  }

  return (
    <StyledPopularButton onClick={handleNavigateToPopular}>
      Популярные
    </StyledPopularButton>
  )
}
