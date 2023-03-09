import * as S from './style'
import { useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import { Skills } from '../../components/Skills'
import { Footer } from '../../components/Footer'

export function Main() {
  const [profile, setProfile] = useState({})

  useEffect(() => {
    getHitHubProfile()
  }, [])

  const getHitHubProfile = async () => {
    const response = await fetch('https://api.github.com/users/vcarvalho0')
    const result = await response.json()
    setProfile(result)
  }

  return (
    <S.Container>
      <Header profile={profile.avatar_url} />
      <Skills />
      <Footer />
    </S.Container>
  )
}
