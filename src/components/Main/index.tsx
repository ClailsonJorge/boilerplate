import * as S from './styles'

const Main = () => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem de um átomo e React Avançado escrito ao lado."
    />

    <S.Title>React Avançado - Boilerplate</S.Title>

    <S.Description>
      Typescript, ReactJs, NextJs e Styled Components
    </S.Description>

    <S.ImgMain
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor sentado em frente a telas de códigos."
    />
  </S.Wrapper>
)

export default Main
