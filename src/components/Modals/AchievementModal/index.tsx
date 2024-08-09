import { Container } from './style.ts'
import { ReactNode } from 'react'

interface AchievementModalProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
}

export function AchievementModal({
  isOpen,
  onClose,
  children,
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
        <button onClick={onClose}>X</button>
        {children}
      </div>
    </Container>
  )
}
