import * as S from './style'
import { useEffect, useState } from 'react'

function AutomaticType({ text }) {
  const [type, setType] = useState('')

  useEffect(() => {
    const id = setTimeout(() => {
      setType(text.slice(0, type.length + 1))
    }, 50)
    return () => clearInterval(id)
  }, [text, type])

  return (
    <S.Inline>
      <S.TextTerminal style={{ color: '#D1D5DA', margin: '0px 0px 5px 10px' }}>
        {type}
      </S.TextTerminal>
    </S.Inline>
  )
}

export function Terminal() {
  const messages = ['Welcome to my portfolio!', 'Feel free to explore']

  return (
    <>
      <S.Box>
        {messages.map((msg, index) => {
          return <AutomaticType key={index} text={msg} />
        })}
      </S.Box>
    </>
  )
}
