import { HeaderDetails } from '../../components/HeaderDetails'
import { Container } from './style.ts'
import assassinscreedImage from '../../assets/assassinscreed.png'
import { SectionGameProgress } from '../../components/SectionGameProgress'

export function GameDetails() {
  return (
    <Container>
      <HeaderDetails
        isItAdded={false}
        image={assassinscreedImage}
        title="Assassins Creed Odyssey"
      />
      <SectionGameProgress isItAdded={false} />
    </Container>
  )
}
