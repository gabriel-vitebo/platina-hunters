import { HeaderDetails } from '../../components/HeaderDetails'
import { Container } from './style.ts'
import eldenringImage from '../../assets/eldenring.png'
import { Section } from '../../components/Section'

export function GameProgress() {
  return (
    <Container>
      <HeaderDetails isItAdded={true} image={eldenringImage} />
      <Section />
    </Container>
  )
}

// todo: criar o componente de header dessa sessao, e criar o componente de section dessa pagina
