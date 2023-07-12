import { StyledAddButton } from './styled'

import { FC } from 'react'

type AddButtonProps = {
  handleAddToFavourites: () => void
}

export const AddButton: FC<AddButtonProps> = ({ handleAddToFavourites }) => {
  return (
    <StyledAddButton onClick={handleAddToFavourites}>
      Добавить в избранное
    </StyledAddButton>
  )
}
