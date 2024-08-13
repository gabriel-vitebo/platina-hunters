import { Container } from './style.ts'
import { IoCloseSharp } from 'react-icons/io5'
import { MdAdd, MdDone } from 'react-icons/md'

interface AchievementModalProps {
  isOpen: boolean
  isDone: boolean
  isItAdded: boolean
  onClose: () => void
  handleToggle: () => void
  title: string
  description?: string
}

export function AchievementModal({
  isOpen,
  isDone,
  isItAdded,
  onClose,
  handleToggle,
  title,
  description,
}: AchievementModalProps) {
  if (!isOpen) return null

  const handleClickOutside = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      onClose()
    }
  }

  return (
    <Container onClick={handleClickOutside}>
      <div className="Content">
        <button onClick={onClose}>
          <IoCloseSharp size={24} />
        </button>
        <div className="header">
          <h2>{title}</h2>
          {isItAdded &&
            (isDone ? (
              <MdDone size={20} onClick={handleToggle} />
            ) : (
              <MdAdd size={20} onClick={handleToggle} />
            ))}
        </div>
        {description && (
          <div className="descriptionBox">
            <p>{description}</p>
          </div>
        )}
      </div>
    </Container>
  )
}
