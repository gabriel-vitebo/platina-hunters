import { Container } from './style.ts'
import { ProgressBar } from '../ProgressBar'
import { AchievementsCard } from '../AchievementsCard'

export function Section() {
  return (
    <Container>
      <ProgressBar progress={9} total={42} completed={4} statsSize={20} />
      <AchievementsCard
        title="Armas Lendárias"
        description="Obteve todas as armas lendárias Obteve todas as armas lendárias Obteve todas as armas lendárias Obteve todas as armas lendárias"
        isItLost={false}
        isDone={false}
      />
      <AchievementsCard
        title="Cinzas Lendárias"
        description="Obteve todas as cinzas lendárias"
        isItLost={true}
        isDone={false}
      />
      <AchievementsCard
        title="Bastardo Leolnino"
        description="Derrotou o Bastardo Leonino"
        isItLost={false}
        isDone={true}
      />
    </Container>
  )
}

// todo: Criar o modal para ver a descrição completa da conquista, e  adaptar o css para
//  aceitar tantos caracteres fora do modal
