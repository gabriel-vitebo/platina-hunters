import { HeaderDetails } from '../../components/HeaderDetails'
import { Container } from './style.ts'
import assassinscreedImage from '../../assets/assassinscreed.png'

import { SectionGameProgress } from '../../components/SectionGameProgress'

export function GameProgress() {
  return (
    <Container>
      <HeaderDetails
        isItAdded={true}
        image={assassinscreedImage}
        title="Assassins Creed Odyssey"
      />
      <SectionGameProgress isItAdded={true} />
    </Container>
  )
}
