import { Container } from './style.ts'
import { FaTrophy } from 'react-icons/fa'

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
    <Container>
      <img src={image} alt="Imagem do jogo" />
      <h2>{title}</h2>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>

      <div className="stats">
        <FaTrophy size={15} />
        <p>
          {completed}/{total}
        </p>
      </div>
      <div className="percentage">
        <p>{progress}%</p>
      </div>
    </Container>
  )
}
