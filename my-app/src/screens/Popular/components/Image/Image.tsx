import { StyledImage } from './styled'

type ImageProps = {
  poster: string
}

export const Image = ({ poster }: ImageProps) => {
  return (
    <StyledImage
      src={`https://image.tmdb.org/t/p/original/${poster}`}
      alt='poster'
    />
  )
}
