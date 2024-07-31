import { Header } from '../../components/Header'
import { Container } from './style.ts'
import { HomeCard } from '../../components/HomeCard'

export function Home() {
  return (
    <Container>
      <Header />
      <HomeCard>
        <h1>Hello World</h1>
        <h1>Hello World</h1>
      </HomeCard>
    </Container>
  )
}
