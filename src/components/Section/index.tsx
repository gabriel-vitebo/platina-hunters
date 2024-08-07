import { Container } from './style.ts'
import { MyGamesCard } from '../MyGamesCard'
import { ProgressBar } from '../ProgressBar'
import eldenringImage from '../../assets/eldenring.png'

export function Section() {
  return (
    <Container>
      <ProgressBar progress={9} total={42} completed={4} statsSize={20} />
      <MyGamesCard
        image={eldenringImage}
        title="Elden Ring"
        total={42}
        completed={4}
        progress={9}
      />
    </Container>
  )
}

/// <div className="withoutContent">
// <BsController size={150}/>
// <p>Nenhum Jogo Encontrado</p>
// </div>
