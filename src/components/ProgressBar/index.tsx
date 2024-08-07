import { Container } from './style.ts'
import { FaTrophy } from 'react-icons/fa'

interface ProgressBarProps {
  progress: number
  completed: number
  total: number
  statsSize: number
}

export function ProgressBar({
  progress,
  completed,
  total,
  statsSize,
}: ProgressBarProps) {
  return (
    <Container progress={progress} statsSize={statsSize}>
      <div className="stats">
        <FaTrophy size={statsSize} />
        <p>
          {completed}/{total}
        </p>
      </div>
      <div className="progress-bar">
        <div className="circle"></div>
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
    </Container>
  )
}
