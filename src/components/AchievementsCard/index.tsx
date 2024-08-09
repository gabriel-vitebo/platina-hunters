import { Container } from './style.ts'
import { MdAdd, MdDone } from 'react-icons/md'
import { useState } from 'react'

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

  const handleToggle = () => {
    setIsDone((prevIsDone) => !prevIsDone)
  }

  function summarizeText(text: string, maxLength: number) {
    if (text.length <= maxLength) {
      return text
    }
    return text.slice(0, maxLength) + '...'
  }

  const summarizedTitle = summarizeText(title, 25)
  const summarizedDescription = summarizeText(description, 50)

  return (
    <Container>
      <div className="content">
        <div className="isItLost">
          <h2>{summarizedTitle}</h2>
          {isDone ? <span>15/02/99</span> : isItLost && <span>(Perdível)</span>}
        </div>
        <p>{summarizedDescription}</p>
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
  )
}
