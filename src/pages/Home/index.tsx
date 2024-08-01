import { Header } from '../../components/Header'
import { Container } from './style.ts'
import { HomeCard } from '../../components/HomeCard'

export function Home() {
  return (
    <Container>
      <Header />
      <HomeCard></HomeCard>
    </Container>
  )
}
