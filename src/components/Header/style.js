import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  display: flex;

  @media (max-width: 768px) {
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`

export const ProfileImg = styled.img`
  border: 1px solid ${({ theme }) => theme.colors.gray};
  width: 180px;
  height: 100%;
  margin: 15px 0 15px 0;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 10%;
`

export const Description = styled.div`
  padding: 35px;
  display: flex;
  white-space: pre-line;
  flex-direction: column;
`

export const DescripText = styled.p`
  color: ${({ theme }) => theme.colors.lightGray};
  font-family: 'Open Sans', sans-serif;
  font-size: 1.8rem;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    font-size: 1.9rem;
  }

  @media (max-width: 425px) {
    font-size: 1.7rem;
  }

  @media (max-width: 375px) {
    font-size: 1.5rem;
  }
`
