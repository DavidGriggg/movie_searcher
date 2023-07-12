import { Routes, Route, Navigate } from 'react-router-dom'

import { Container } from './styled'

import { Main } from '../../screens/Main/Main'
import { Movie } from '../../screens/Movie/Movie'
import { Favourites } from '../../screens/Favourites/Favourites'
import { Popular } from '../../screens/Popular/Popular'

export function App() {
  return (
    <Container>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/movie/:movieId' element={<Movie />} />
        <Route path='/movie/favourites' element={<Favourites />} />
        <Route path='/movie/popular' element={<Popular />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </Container>
  )
}
