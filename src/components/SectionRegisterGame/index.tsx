import { Container } from './style.ts'
import { MainInput } from '../MainInput'
import { TextArea } from '../TextArea'
import { CheckboxInput } from '../CheckBoxInput'
import { useState } from 'react'

export function SectionRegisterGame() {
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = (checked: boolean) => {
    setIsChecked(checked)
  }

  return (
    <Container>
      <MainInput hasIcon={false} placeholder="Nome do Jogo" />
      <MainInput hasIcon={false} placeholder="Titulo da Conquista" />
      <TextArea placeholder="Descrição da Conquista" />
      <CheckboxInput
        label="É Perdivel?"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
    </Container>
  )
}
