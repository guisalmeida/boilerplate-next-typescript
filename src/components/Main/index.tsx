import * as S from './styles'

const Main = () => {
  return (
    <S.Wrapper>
      <S.Logo
        src="/img/logo.svg"
        alt="Imagem de um átomo e React Avançado escrito ao lado."
      />
      <S.Title>Boilerplate</S.Title>
      <S.Description>Typescript, ReactJS e Styled Components</S.Description>

      <S.Illustration
        src="/img/hero-illustration.svg"
        alt="Imagem de um desenvolvedor de frrente para tela com código."
      />
    </S.Wrapper>
  )
}

export default Main
