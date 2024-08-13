import { Container } from './style.ts'
import { MdAdd, MdDone } from 'react-icons/md'
import { useState } from 'react'
import { AchievementModal } from '../Modals/AchievementModal'

interface AchievementsCardProps {
  title: string
  description: string
  isItLost: boolean
  isDone: boolean
  isItAdded: boolean
  onToggle: () => void
}

export function AchievementsCard({
  title,
  description,
  isItLost,
  isDone,
  isItAdded,
  onToggle,
}: AchievementsCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

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
            {isDone
              ? isItAdded && <span>15/02/99</span>
              : isItLost && <span>(Perdível)</span>}
          </div>
          <p>{description}</p>
        </div>
        {isItAdded && (
          <div className="buttons">
            {isDone ? (
              <button
                className="doneButton"
                onClick={(event) => {
                  event.stopPropagation()
                  onToggle()
                }}
              >
                <MdDone size={40} />
              </button>
            ) : (
              <button
                className="addButton"
                onClick={(event) => {
                  event.stopPropagation()
                  onToggle()
                }}
              >
                <MdAdd size={40} />
              </button>
            )}
          </div>
        )}
      </Container>

      <AchievementModal
        handleToggle={onToggle}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={title}
        description={description}
        isDone={isDone}
        isItAdded={isItAdded}
      />
    </>
  )
}
