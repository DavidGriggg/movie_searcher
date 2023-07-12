import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`

export const StyledTitle = styled.h1`
  font-size: 30px;
  font-weight: 700;
  color: #0e66eb;
  margin: 70px 0 50px;
`

export const ItemsContainer = styled.div`
  text-align: left;
`

export const Item = styled.button`
  display: flex;
  color: #fff;
  width: 300px;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 15px;
  border: 2px solid #0e66eb;
  justify-content: space-between;
  text-align: left;
`

export const DeleteButton = styled.button`
  padding-left: 10px;
  flex-shrink: 0;
`

export const DeleteIcon = styled.img`
  background-color: #1d1d1d;
  color: #fff;
  width: 20px;
  height: 20px;
`

export const TextIfEmpty = styled.h3`
  font-size: 18px;
  color: #fff;
  margin: 0 auto;
`
