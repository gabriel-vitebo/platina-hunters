import { Container } from './style.ts'
import { FaTrophy, FaPlus } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

interface MyGamesCardProps {
  image: string
  title: string
  totalAchievement: number
  isItAdded: boolean
}

export function GamesCard({
  image,
  title,
  totalAchievement,
  isItAdded,
}: MyGamesCardProps) {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/gameprogress', {
      state: { isItAdded, title, image },
    })
  }

  return (
    <Container onClick={handleClick}>
      <img src={image} alt="Imagem do jogo" />
      <h2>{title}</h2>

      <div className="stats">
        <FaTrophy size={15} />
        <p>{totalAchievement}</p>
      </div>

      {isItAdded ? (
        <div className="status">
          <p>Jogo adicionado</p>
          <button>Ver Progresso</button>
        </div>
      ) : (
        <button className="addGameButton">
          <FaPlus size={15} />
          Adicionar Jogo
        </button>
      )}
    </Container>
  )
}
