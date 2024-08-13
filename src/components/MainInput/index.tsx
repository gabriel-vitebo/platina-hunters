import { Container } from './style.ts'
import { FaSearch } from 'react-icons/fa'

interface MainInputProps {
  placeholder?: string
  hasIcon: boolean
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export function MainInput({
  placeholder,
  hasIcon,
  value,
  onChange,
}: MainInputProps) {
  return (
    <Container>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {hasIcon && (
        <button>
          <FaSearch size={15} />
        </button>
      )}
    </Container>
  )
}
