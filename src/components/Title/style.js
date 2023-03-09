import styled from 'styled-components'

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 35px;
  padding: 10px;
`

export const Line = styled.span`
  width: 100%;
  height: 1px;
  background-color: white;
`

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-family: 'Open Sans';
  font-size: 2.5rem;
  font-weight: 400;

  @media (max-width: 375px) {
    font-size: 2.3rem;
  }
`

export const SubTitle = styled.h2`
  color: ${({ theme }) => theme.colors.lightGray};
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  font-size: 2rem;

  @media (max-width: 375px) {
    font-size: 1.9rem;
  }

  @media (max-width: 320px) {
    font-size: 1.6rem;
  }
`
