import * as S from './styles'

const Main = ({title = 'React Avançado', description = 'Typescript, ReactJS, NextJS e styled components'}) => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem de um átomo e React Avançado escrito ao lado"
    />
    <S.Title>{title}</S.Title>
    <S.Description>
      {description}
    </S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor sentado de frente para um monitor com código"
    />
  </S.Wrapper>
)

export default Main