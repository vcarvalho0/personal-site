import styled, { keyframes } from 'styled-components'

const blink = keyframes`
  0% { opacity: 1; }
  49% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 0; }
`

export const TextTerminal = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.9rem;

  &::before {
    content: '~/projects🚀/vitor » ';
    color: #3b82eb;
  }

  &::after {
    content: ${(props) => props.blink};
    animation: ${blink} 1s infinite;
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
  width: 700px;
  height: 150px;
  background-color: #192029;
  border-radius: 15px;

  @media (max-width: 700px) {
    width: 80%;
  }
`
