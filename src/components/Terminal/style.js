import styled, { keyframes } from 'styled-components'

const blink = keyframes`
  0% { opacity: 1; }
  49% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 0; }
`

export const TextTerminal = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.8rem;
  font-family: 'Open Sans', sans-serif;
  font-weight: 500;

  &::before {
    content: '~/projects🚀/vitor » ';
    color: #3b82eb;
  }

  &::after {
    content: ${(props) => props.blink};
    animation: ${blink} 1s infinite;
  }

  @media (max-width: 425px) {
    font-size: 1.5rem;
  }

  @media (max-width: 375px) {
    font-size: 1.3rem;
  }
`

export const Inline = styled.div`
  display: flex;
  flex-direction: row;
`

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  margin: 20px;
  width: 100%;
  height: 150px;
  background-color: #1a202c;
  border: 1px solid #2d3748;
  border-radius: 10px;

  @media (max-width: 768px) {
    width: 90%;
  }
`
