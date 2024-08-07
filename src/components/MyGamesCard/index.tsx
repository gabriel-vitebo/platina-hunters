import { Container } from './style.ts'
import { ProgressBar } from '../ProgressBar'

interface MyGamesCardProps {
  image: string
  title: string
  completed: number
  total: number
  progress: number
}

export function MyGamesCard({
  image,
  title,
  completed,
  total,
  progress,
}: MyGamesCardProps) {
  return (
    <Container progress={progress}>
      <img src={image} alt="Imagem do jogo" />
      <h2>{title}</h2>
      <ProgressBar
        progress={progress}
        completed={completed}
        total={total}
        statsSize={15}
      />
      <div className="percentage">
        <p>{progress}%</p>
      </div>
    </Container>
  )
}
