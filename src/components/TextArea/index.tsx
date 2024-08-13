import { Container } from './style.ts'

interface MainTextAreaProps {
  placeholder?: string
}

export function TextArea({ placeholder }: MainTextAreaProps) {
  return (
    <Container>
      <textarea placeholder={placeholder} />
    </Container>
  )
}
