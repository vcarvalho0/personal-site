import * as S from './style'

export function Title({ title, sub }) {
  return (
    <>
      <S.TitleContainer>
        <S.Title>{title}</S.Title>
      </S.TitleContainer>
      <S.SubTitle>{sub}</S.SubTitle>
    </>
  )
}
