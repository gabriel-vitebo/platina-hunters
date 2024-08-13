import { Container } from './style.ts'
import { FaTrophy } from 'react-icons/fa'

interface ProgressBarProps {
  progress: number
  completed: number
  total: number
  statsSize: number
  isItAdded: boolean
}

export function ProgressBar({
  progress,
  completed,
  total,
  statsSize,
  isItAdded,
}: ProgressBarProps) {
  return (
    <Container progress={progress} statsSize={statsSize}>
      <div className="stats">
        <FaTrophy size={statsSize} />
        {isItAdded ? (
          <p>
            {completed}/{total}
          </p>
        ) : (
          <p> {total}</p>
        )}
      </div>
      {isItAdded && (
        <div className="progress-bar">
          <div className="circle"></div>
          <div className="progress" style={{ width: `${progress}%` }}></div>
        </div>
      )}
    </Container>
  )
}
