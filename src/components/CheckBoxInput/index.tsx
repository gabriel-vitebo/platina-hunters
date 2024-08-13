import { Container, CheckboxLabel } from './style.ts'

interface MainCheckboxProps {
  label: string
  checked: boolean
  onChange: (checked: boolean) => void
}

export function CheckboxInput({ label, checked, onChange }: MainCheckboxProps) {
  return (
    <Container>
      <CheckboxLabel>
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
        />
        {label}
      </CheckboxLabel>
    </Container>
  )
}
