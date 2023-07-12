import styled from 'styled-components'

export const GenreButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px 15px;
  flex-wrap: wrap;
`

export const GenreButton = styled.button`
  border-radius: 30px;
  border: 2px solid #0e66eb;
  background-color: #1d1d1d;
  color: #0e66eb;
  width: 120px;
  padding: 10px;
  font-size: 16px;
  &.selected {
    background-color: #0e66eb;
    color: #fff;
  }
`

export const StyledTitle = styled.h1`
  font-size: 30px;
  font-weight: 700;
  color: #0e66eb;
  margin: 70px 0 50px;
`

export const PopularContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 300px;
`

export const PopularItem = styled.button`
  position: relative;
  display: flex;
  margin-top: 20px;
  border: 2px #0e66eb solid;
  border-radius: 15px;
  padding: 10px;
  text-align: left;
`

export const PopularItemRight = styled.div`
  display: block;
`

export const PopularItemTitle = styled.h1`
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  width: 130px;
  overflow-wrap: anywhere;
  padding: 0 7px 0 10px;
  margin: 0 auto;
`

export const PopularItemVote = styled.p`
  position: absolute;
  left: 155px;
  bottom: 12px;
  color: #fff;
  text-align: left;
  margin: 0 10px;
`
