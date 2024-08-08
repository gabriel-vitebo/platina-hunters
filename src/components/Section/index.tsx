import { Container } from './style.ts'
import { ProgressBar } from '../ProgressBar'
import { AchievementsCard } from '../AchievementsCard'

export function Section() {
  return (
    <Container>
      <ProgressBar progress={9} total={42} completed={4} statsSize={20} />
      <AchievementsCard
        title="Armas Lendárias"
        description="Obteve todas as armas lendárias"
        isItLost={false}
      />
      <AchievementsCard
        title="Cinzas Lendárias"
        description="Obteve todas as cinzas lendárias"
        isItLost={true}
      />
    </Container>
  )
}
