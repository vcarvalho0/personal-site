import { useEffect, useState } from 'react'
import { Text } from '../Text'
import { Title } from '../Title'
import { ProfileImg } from './style'

export function Header() {
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
    <>
      <ProfileImg src={profile.avatar_url} alt="avatar" />
      <Title>Hey, welcome to my portfolio</Title>
      <Text>Here you can find some informations about me</Text>
    </>
  )
}
