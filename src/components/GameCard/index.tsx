import { Container } from './style.ts'
import { FaTrophy } from 'react-icons/fa'

interface MyGamesCardProps {
  image: string
  title: string
  totalAchievement: number
  isItAdded: boolean
}

export function MyGamesCard({
  image,
  title,
  totalAchievement,
  isItAdded,
}: MyGamesCardProps) {
  return (
    <Container>
      <img src={image} alt="Imagem do jogo" />
      <h2>{title}</h2>

      <div className="stats">
        <FaTrophy size={15} />
        <p>{totalAchievement}</p>
      </div>

      {isItAdded ? <h1>Hello World</h1> : <h1>Ola mundo</h1>}
    </Container>
  )
}
