import { HeaderDetails } from '../../components/HeaderDetails'
import { Container } from './style.ts'
import eldenringImage from '../../assets/eldenring.png'
import { SectionGameProgress } from '../../components/SectionGameProgress'

export function GameProgress() {
  return (
    <Container>
      <HeaderDetails isItAdded={true} image={eldenringImage} />
      <SectionGameProgress isItAdded={false} />
    </Container>
  )
}
