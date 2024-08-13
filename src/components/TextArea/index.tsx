import { Container } from './style.ts'

interface MainTextAreaProps {
  placeholder?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

export function TextArea({ placeholder, value, onChange }: MainTextAreaProps) {
  return (
    <Container>
      <textarea placeholder={placeholder} value={value} onChange={onChange} />
    </Container>
  )
}
