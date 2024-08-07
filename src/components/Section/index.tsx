import { Container } from './style.ts'
import { MyGamesCard } from '../MyGamesCard'
import assassinsCreedImage from '../../assets/assassinscreed.png'
import { ProgressBar } from '../ProgressBar'

export function Section() {
  return (
    <Container>
      <ProgressBar progress={9} total={42} completed={4} />
      <MyGamesCard
        image={assassinsCreedImage}
        title="Assassin's Creed Odyssey"
        total={93}
        completed={38}
        progress={43}
      />
    </Container>
  )
}

/// <div className="withoutContent">
// <BsController size={150}/>
// <p>Nenhum Jogo Encontrado</p>
// </div>
