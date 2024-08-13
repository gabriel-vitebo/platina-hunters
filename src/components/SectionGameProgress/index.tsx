import { Container } from './style.ts'
import { ProgressBar } from '../ProgressBar'
import { AchievementsCard } from '../AchievementsCard'
import { useState } from 'react'
import { preRegisteredGames } from '../../utils/preRegisteredGames.ts'
interface Achievement {
  title: string
  description: string
  isItLost: boolean
  isDone: boolean
}

export function SectionGameProgress() {
  const [achievements, setAchievements] = useState<Achievement[]>(
    preRegisteredGames.assassinsCreedOdyssey,
  )

  const totalAchievements = achievements.length
  const completedAchievements = achievements.filter(
    (achievement) => achievement.isDone,
  ).length
  const progress = (completedAchievements / totalAchievements) * 100

  const handleToggleAchievement = (index: number) => {
    const newAchievements = [...achievements]
    newAchievements[index].isDone = !newAchievements[index].isDone
    setAchievements(newAchievements)
  }
  return (
    <Container>
      <div className="progress-wrapper">
        <ProgressBar
          progress={progress}
          total={totalAchievements}
          completed={completedAchievements}
          statsSize={20}
        />
      </div>
      {achievements.map((achievement, index) => (
        <AchievementsCard
          key={index}
          title={achievement.title}
          description={achievement.description}
          isItLost={achievement.isItLost}
          isDone={achievement.isDone}
          onToggle={() => handleToggleAchievement(index)}
        />
      ))}
    </Container>
  )
}
