import { Header } from '../../components/Header'
import { Container } from './style.ts'
import { SectionHome } from '../../components/SectionHome'
import { MyGamesCard } from '../../components/MyGamesCard'
import assassinsCreedImage from '../../assets/assassinscreed.png'
import eldenringImage from '../../assets/eldenring.png'
import hogwartsLegacyImage from '../../assets/hogwartsLegacy.png'

export function Home() {
  return (
    <Container>
      <Header />
      <SectionHome>
        <MyGamesCard
          image={assassinsCreedImage}
          title="Assassin's Creed Odyssey"
          total={93}
          completed={38}
          progress={43}
        />
        <MyGamesCard
          image={eldenringImage}
          title="Elden Ring"
          total={42}
          completed={4}
          progress={9}
        />
        <MyGamesCard
          image={hogwartsLegacyImage}
          title="Hogwarts Legacy"
          total={45}
          completed={45}
          progress={100}
        />
      </SectionHome>
    </Container>
  )
}
