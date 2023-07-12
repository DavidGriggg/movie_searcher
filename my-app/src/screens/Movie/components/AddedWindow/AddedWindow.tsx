import { Container, Title, Button } from './styled'

import { useSelector } from 'react-redux'
import { RootState } from '../../../../modules'

type AddedWindowProps = {
  setIsAdding: (arg: boolean) => void
  setButtonDisabled: (arg: boolean) => void
}

export const AddedWindow = ({
  setIsAdding,
  setButtonDisabled,
}: AddedWindowProps) => {
  const handleCloseModalWindow = () => {
    setIsAdding(false)
    document.body.style.overflow = 'visible'
    setButtonDisabled(false)
  }

  return (
    <Container>
      <Title>Фильм добавлен</Title>
      <Button onClick={handleCloseModalWindow}>Подтвердить</Button>
    </Container>
  )
}
