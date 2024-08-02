import { Container } from './style.ts'
import { FaSearch } from 'react-icons/fa'

export function Search() {
  return (
    <Container>
      <input type="text" id="searchInput" placeholder="Pesquisar Jogo" />
      <button>
        <FaSearch size={15} />
      </button>
    </Container>
  )
}
