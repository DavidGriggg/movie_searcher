import { keyframes, styled } from 'styled-components'

const confirmOpen = keyframes`
  from {opacity: 0}
  to {opacity: 1}
`

export const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  margin: -65px 0 0 -150px;
  width: 300px;
  height: 130px;
  background-color: #1d1d1d;
  border: 2px #0e66eb solid;
  border-radius: 25px;
  animation-name: ${confirmOpen};
  animation-duration: 0.3s;
  animation-fill-mode: forwards;
`

export const Title = styled.h1`
  color: #0e66eb;
  font-size: 20px;
  font-weight: 700;
  padding: 10px 0 30px 0;
`

export const Button = styled.button`
  background-color: #0e66eb;
  color: #fff;
  padding: 10px;
  border-radius: 15px;
`
