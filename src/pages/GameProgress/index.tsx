import { HeaderDetails } from '../../components/HeaderDetails'
import { Container } from './style.ts'
import { SectionHome } from '../../components/SectionHome'

export function GameProgress() {
  return (
    <Container>
      <HeaderDetails />
      <SectionHome />
    </Container>
  )
}

// todo: criar o componente de header dessa sessao, e criar o componente de section dessa pagina
