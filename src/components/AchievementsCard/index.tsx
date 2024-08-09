import { Container } from './style.ts'
import { MdAdd, MdDone } from 'react-icons/md'
import { useState } from 'react'
import { AchievementModal } from '../Modals/AchievementModal'

interface AchievementsCardProps {
  title: string
  description: string
  isItLost: boolean
  isDone: boolean
}

export function AchievementsCard({
  title,
  description,
  isItLost,
  isDone: initialIsDone,
}: AchievementsCardProps) {
  const [isDone, setIsDone] = useState(initialIsDone)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleToggle = (event: React.MouseEvent) => {
    event.stopPropagation()
    setIsDone((prevIsDone) => !prevIsDone)
  }

  const handleCardClick = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <Container onClick={handleCardClick} isModalOpen={isModalOpen}>
        <div className="content">
          <div className="isItLost">
            <h2>{title}</h2>
            {isDone ? (
              <span>15/02/99</span>
            ) : (
              isItLost && <span>(Perdível)</span>
            )}
          </div>
          <p>{description}</p>
        </div>
        <div className="buttons">
          {isDone ? (
            <button className="doneButton" onClick={handleToggle}>
              <MdDone size={40} />
            </button>
          ) : (
            <button className="addButton" onClick={handleToggle}>
              <MdAdd size={40} />
            </button>
          )}
        </div>
      </Container>

      <AchievementModal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h2>{title}</h2>
        <p>{description}</p>
      </AchievementModal>
    </>
  )
}
