import * as S from './style'
import { Terminal } from '../Terminal'
import { Title } from '../Title'

export function Header({ profile }) {
  const messages = [
    'Olá, meu nome é Vitor e tenho atualmente 20 anos de idade.',
    'O objetivo deste site é servir como portfolio para que eu possa ir atualizando meus aprendizados e minhas habilidades.'
  ]

  return (
    <>
      <Terminal />
      <Title title="Hey, welcome! 👋" />
      <S.Wrapper>
        <S.ProfileImg src={profile} alt="avatar" />
        <S.Description>
          {messages.map((msg, index) => (
            <S.DescripText key={index}>{msg}</S.DescripText>
          ))}
        </S.Description>
      </S.Wrapper>
    </>
  )
}
