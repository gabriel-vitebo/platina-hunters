import { Header } from '../../components/Header'
import { Container } from './style.ts'
import { SectionHome } from '../../components/SectionHome'

export function Home() {
  return (
    <Container>
      <Header />
      <SectionHome />
    </Container>
  )
}
