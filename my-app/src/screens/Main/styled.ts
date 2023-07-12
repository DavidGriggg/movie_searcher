import styled from 'styled-components'

export const SearchItem = styled.button`
  display: block;
  background-color: #0e66eb;
  color: #fff;
  width: 280px;
  margin-bottom: 5px;
  border-radius: 20px;
  padding: 10px 8px;
`

export const StyledInput = styled.input`
  width: 300px;
  padding: 15px;
  background-color: #1d1d1d;
  border: 2px solid #0e66eb;
  color: #fff;
  border-radius: 20px;
  margin: 30px auto 20px;
  &::placeholder {
    color: #fff;
    opacity: 0.7;
  }
`

export const StyledTitle = styled.h1`
  font-size: 30px;
  font-weight: 700;
  color: #0e66eb;
  margin: 70px 0 15px;
`

export const ButtonsWrapper = styled.div`
  display: flex;
`
