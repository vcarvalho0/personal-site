import * as S from './style'
import { Header } from '../../components/Header'
import { Skills } from '../../components/Skills'
import { Footer } from '../../components/Footer'

export function Main() {
  return (
    <S.Container>
      <Header />
      <Skills />
      <Footer />
    </S.Container>
  )
}
