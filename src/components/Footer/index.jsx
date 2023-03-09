import * as S from './style'
import { Title } from '../Title'
import { Text } from '../Text/style'
import { DiGithubBadge } from 'react-icons/di'
import { IoLogoLinkedin } from 'react-icons/io'

export function Footer() {
  return (
    <>
      <Title title="Socials" sub="Links for social medias" />
      <S.SocialsBox>
        <S.Wrapper>
          <S.Box>
            <a
              href="https://github.com/vcarvalho0"
              target={'_blank'}
              rel="noreferrer"
            >
              <DiGithubBadge size={50} color="#ffffff" />
            </a>
          </S.Box>
          <S.Box>
            <a
              href="https://www.linkedin.com/in/vitor-augusto-533948213/"
              target={'_blank'}
              rel="noreferrer"
            >
              <IoLogoLinkedin size={50} color="#0077b5" />
            </a>
          </S.Box>
        </S.Wrapper>
      </S.SocialsBox>
      <Text style={{ fontSize: '1.7rem' }}>&copy; 2023 Vitor Augusto</Text>
    </>
  )
}
