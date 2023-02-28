import styled from 'styled-components'

export const Section = styled.section`
  padding: 60px;
`

export const Article = styled.article`
  display: flex;
  align-items: center;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const SubTitle = styled.h2`
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  font-size: 2.8rem;
  font-weight: 400;
`

export const ProgressBar = styled.progress`
  height: 20px;
  width: 150px;
`
