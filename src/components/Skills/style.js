import styled from 'styled-components'

export const Section = styled.section`
  padding: 35px;
  width: 100%;
`

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0px, 1fr));
  gap: 15px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0px, auto));
  }

  @media (max-width: 425px) {
    grid-template-columns: repeat(1, minmax(0px, auto));
  }
`

export const Article = styled.article`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  border-radius: 10px;
  transition: transform 200ms ease-in-out;
  padding: 5px;
  background-color: ${({ theme }) => theme.colors.oceanDark};
  border: 1px solid ${({ theme }) => theme.colors.gray};

  &:hover {
    transform: scaleY(1.1);
    border: 1px solid ${({ theme }) => theme.colors.lightGray};
  }
`

export const Info = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`
