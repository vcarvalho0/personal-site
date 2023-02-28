import * as S from './style'
import { DiJavascript1, DiGit, DiRust, DiReact } from 'react-icons/di'
import { SiTypescript } from 'react-icons/si'
import { useEffect, useState } from 'react'

export function Skills() {
  const [progress, setProgess] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      if (progress <= 100) {
        setProgess((prog) => prog + 1)
      }
    }, 5)
    return () => clearInterval(id)
  }, [progress])

  return (
    <S.Section>
      <S.SubTitle>Skills</S.SubTitle>
      <S.Wrapper>
        <S.Article>
          <DiReact size={60} color="#1463f4" />
          <S.ProgressBar max={100} value={progress - 40} />
        </S.Article>
        <S.Article>
          <DiJavascript1 size={60} color="#F7DF1E" />
          <S.ProgressBar max={100} value={progress - 30} />
        </S.Article>
        <S.Article>
          <SiTypescript size={60} color="#007acc" style={{ padding: '10px' }} />
          <S.ProgressBar max={100} value={progress - 40} />
        </S.Article>
        <S.Article>
          <DiGit size={60} color="#F1502F" />
          <S.ProgressBar max={100} value={progress - 30} />
        </S.Article>
        <S.Article>
          <DiRust size={60} color="white" />
          <S.ProgressBar max={100} value={progress - 70} />
        </S.Article>
      </S.Wrapper>
    </S.Section>
  )
}
