import { Container } from './style.ts'
import { IoCloseSharp } from 'react-icons/io5'
import { MdAdd, MdDone } from 'react-icons/md'

interface AchievementModalProps {
  isOpen: boolean
  isDone: boolean
  onClose: () => void
  handleToggle: () => void
  title: string
}

export function AchievementModal({
  isOpen,
  isDone,
  onClose,
  handleToggle,
  title,
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
          {isDone ? (
            <MdDone size={20} onClick={handleToggle} />
          ) : (
            <MdAdd size={20} onClick={handleToggle} />
          )}
        </div>
      </div>
    </Container>
  )
}
