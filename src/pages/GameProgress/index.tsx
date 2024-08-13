import { useLocation } from 'react-router-dom'
import { HeaderDetails } from '../../components/HeaderDetails'
import { Container } from './style.ts'

import { SectionGameProgress } from '../../components/SectionGameProgress'

export function GameProgress() {
  const location = useLocation()
  const { isItAdded, title, image } = location.state || {}

  return (
    <Container>
      <HeaderDetails isItAdded={isItAdded} image={image} title={title} />
      <SectionGameProgress isItAdded={isItAdded} />
    </Container>
  )
}
