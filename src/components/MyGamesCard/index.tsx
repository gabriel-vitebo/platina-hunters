import { Container } from './style.ts'
import { ProgressBar } from '../ProgressBar'
import { useNavigate } from 'react-router-dom'

interface MyGamesCardProps {
  image: string
  title: string
  completed: number
  total: number
  progress: number
  isItAdded: boolean
}

export function MyGamesCard({
  image,
  title,
  completed,
  total,
  progress,
  isItAdded,
}: MyGamesCardProps) {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/gameprogress', {
      state: { isItAdded, title, image },
    })
  }

  return (
    <Container progress={progress} onClick={handleClick}>
      <img src={image} alt="Imagem do jogo" />
      <h2>{title}</h2>
      <ProgressBar
        progress={progress}
        completed={completed}
        total={total}
        statsSize={15}
        isItAdded={isItAdded}
      />
      <div className="percentage">
        <p>{progress}%</p>
      </div>
    </Container>
  )
}
