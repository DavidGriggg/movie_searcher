import { StyledButton } from './styled'

import { useNavigate } from 'react-router-dom'

type ButtonProps = {
  buttonDisabled: boolean
}

export const Button = ({ buttonDisabled }: ButtonProps) => {
  const navigate = useNavigate()

  return (
    <StyledButton disabled={buttonDisabled} onClick={() => navigate('/')}>
      Домой
    </StyledButton>
  )
}
