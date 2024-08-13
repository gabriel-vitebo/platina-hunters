import { Container } from './style.ts'
import { MainInput } from '../MainInput'
import { TextArea } from '../TextArea'
import { CheckboxInput } from '../CheckBoxInput'
import { useState } from 'react'
import { AchievementsCard } from '../AchievementsCard'

export function SectionRegisterGame() {
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = (checked: boolean) => {
    setIsChecked(checked)
  }

  return (
    <Container>
      <MainInput hasIcon={false} placeholder="Nome do Jogo" />
      <div className="achievements">
        <MainInput hasIcon={false} placeholder="Titulo da Conquista" />
        <TextArea placeholder="Descrição da Conquista" />
        <CheckboxInput
          label="É Perdivel?"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <button>Adicionar conquista</button>
        <AchievementsCard
          title="exemplo"
          description="exemplo"
          isItLost={false}
          isDone={false}
          onToggle={() => {}}
        />
      </div>
    </Container>
  )
}
