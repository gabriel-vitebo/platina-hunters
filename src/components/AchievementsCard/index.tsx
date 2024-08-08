import { Container } from './style.ts'
import { MdAdd } from 'react-icons/md'

interface AchievementsCardProps {
  title: string
  description: string
  isItLost: boolean
}

export function AchievementsCard({
  title,
  description,
  isItLost,
}: AchievementsCardProps) {
  return (
    <Container>
      <div className="content">
        <div className="isItLost">
          <h2>{title}</h2>
          {isItLost && <span>(Perdivel)</span>}
        </div>
        <p>{description}</p>
      </div>
      <div className="buttons">
        <button>
          <MdAdd size={40} />
        </button>
      </div>
    </Container>
  )
}
