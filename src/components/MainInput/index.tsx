import { Container } from './style.ts'
import { FaSearch } from 'react-icons/fa'

interface MainInputProps {
  placeholder?: string
  hasIcon: boolean
}

export function MainInput({ placeholder, hasIcon }: MainInputProps) {
  return (
    <Container>
      <input type="text" placeholder={placeholder} />
      {hasIcon && (
        <button>
          <FaSearch size={15} />
        </button>
      )}
    </Container>
  )
}
