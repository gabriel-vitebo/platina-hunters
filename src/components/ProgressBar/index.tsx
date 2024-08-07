import { Container } from './style.ts'
import { FaTrophy } from 'react-icons/fa'

interface ProgressBarProps {
  progress: number
  completed: number
  total: number
}

export function ProgressBar({ progress, completed, total }: ProgressBarProps) {
  return (
    <Container progress={progress}>
      <div className="stats">
        <FaTrophy size={20} />
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
