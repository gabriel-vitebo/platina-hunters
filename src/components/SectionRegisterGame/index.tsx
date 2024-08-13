import { Container } from './style.ts'
import { MainInput } from '../MainInput'
import { TextArea } from '../TextArea'
import { CheckboxInput } from '../CheckBoxInput'
import { useState } from 'react'
import { AchievementsCard } from '../AchievementsCard'
import { FaTrophy } from 'react-icons/fa'

interface Achievement {
  title: string
  description?: string
  isItLost: boolean
}

interface SectionRegisterGameProps {
  isItAdded: boolean
}

export function SectionRegisterGame({ isItAdded }: SectionRegisterGameProps) {
  const [gameTitle, setGameTitle] = useState('')
  const [achievementTitle, setAchievementTitle] = useState('')
  const [achievementDescription, setAchievementDescription] = useState('')
  const [isAchievementLost, setIsAchievementLost] = useState(false)
  const [achievements, setAchievements] = useState<Achievement[]>([])
  const [total, setTotal] = useState(0)

  const handleCheckboxChange = (checked: boolean) => {
    setIsAchievementLost(checked)
  }

  const handleAddAchievement = () => {
    if (achievementTitle.trim() === '') {
      alert('O título da conquista é obrigatório.')
      return
    }

    const newAchievement: Achievement = {
      title: achievementTitle,
      description: achievementDescription,
      isItLost: isAchievementLost,
    }

    setAchievements((prev) => [...prev, newAchievement])
    setAchievementTitle('')
    setAchievementDescription('')
    setIsAchievementLost(false)
    setTotal(total + 1)
  }

  const canRegisterGame = achievements.length > 0 && gameTitle !== ''

  return (
    <Container>
      <MainInput
        hasIcon={false}
        placeholder="Nome do Jogo"
        value={gameTitle}
        onChange={(e) => setGameTitle(e.target.value)}
      />
      <div className="achievements">
        <div className="stats">
          <FaTrophy size={25} />
          <p> {total}</p>
        </div>
        <MainInput
          hasIcon={false}
          placeholder="Título da Conquista"
          value={achievementTitle}
          onChange={(e) => setAchievementTitle(e.target.value)}
        />
        <TextArea
          placeholder="Descrição da Conquista"
          value={achievementDescription}
          onChange={(e) => setAchievementDescription(e.target.value)}
        />
        <CheckboxInput
          label="É Perdível?"
          checked={isAchievementLost}
          onChange={handleCheckboxChange}
        />
        <button onClick={handleAddAchievement}>Adicionar conquista</button>
        <div className="achievementBox">
          {achievements.map((achievement, index) => (
            <AchievementsCard
              key={index}
              title={achievement.title}
              description={achievement.description || ''}
              isItLost={achievement.isItLost}
              isDone={false}
              isItAdded={isItAdded}
              onToggle={() => {}}
            />
          ))}
        </div>
        <button className="buttonRegister" disabled={!canRegisterGame}>
          Registrar Jogo
        </button>
      </div>
    </Container>
  )
}
