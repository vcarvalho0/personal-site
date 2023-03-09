import * as S from './style'
import { useState, useEffect } from 'react'

export function ProgressBar({ techProgress }) {
  const [progress, setProgess] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      if (progress <= 100) {
        setProgess((prog) => prog + 1)
      }
    }, 10)
    return () => clearInterval(id)
  }, [progress])

  return <S.ProgressBar max={100} value={progress - techProgress} />
}
