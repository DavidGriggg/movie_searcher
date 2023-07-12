import { Pagination } from '@mui/material'
import { useDispatch } from '../../../../modules'
import { popularActions } from '../../../../modules/popular/slice'
import { ChangeEvent } from 'react'

type PopularPaginationTypes = {
  setPage: (arg: number) => void
  handleChooseGenre: (arg1: any, arg2: number) => void
  genreId: any
  page: number
}

export const PopularPagination = ({
  setPage,
  page,
  genreId,
}: PopularPaginationTypes) => {
  const dispatch = useDispatch()

  const handlePaginate = (event: ChangeEvent<unknown>, newPage: number) => {
    setPage(newPage)
    dispatch(
      popularActions.requestPopular({ genreId: genreId, page: newPage } as any),
    )
    window.scroll(0, 0)
  }

  return <Pagination count={100} page={page} onChange={handlePaginate} />
}
