import styled from 'styled-components'

export const SocialsBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`

export const Box = styled.div`
  margin: 0 0 0 15px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.gray};

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.lightGray};
  }
`
