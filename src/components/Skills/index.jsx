import * as S from './style'
import {
  DiJavascript1,
  DiGit,
  DiRust,
  DiReact,
  DiNodejsSmall,
  DiHtml5,
  DiCss3
} from 'react-icons/di'
import { SiTypescript } from 'react-icons/si'
import { techs } from './data'
import { Title } from '../Title'
import { Text } from '../Text/style'
import { ProgressBar } from '../Progress'

const Icon = ({ component: Component, size, color, style }) => {
  return <Component size={size} color={color} style={style} />
}

export function Skills() {
  const icons = [
    DiJavascript1,
    SiTypescript,
    DiHtml5,
    DiCss3,
    DiReact,
    DiGit,
    DiNodejsSmall,
    DiRust
  ]

  return (
    <>
      <Title
        title="Technologies"
        sub="List of my favorite tools and technologies"
      />
      <S.Section>
        <S.Wrapper>
          {icons &&
            techs.map((tech, index) => (
              <S.Article key={index}>
                <Icon
                  component={icons[index]}
                  size={tech.size}
                  color={tech.color}
                  style={{ marginRight: '10px' }}
                />
                <S.Info>
                  <Text style={{ fontSize: '1.7rem' }}>{tech.name}</Text>
                  <ProgressBar techProgress={tech.progress} />
                </S.Info>
              </S.Article>
            ))}
        </S.Wrapper>
      </S.Section>
    </>
  )
}
