import { ReactNode, useState } from 'react'

import { Container } from './style.ts'

interface HomeCardProps {
  children: ReactNode
}

export function HomeCard({ children }: HomeCardProps) {
  const [activeButton, setActiveButton] = useState<'meusJogos' | 'jogos'>(
    'meusJogos',
  )

  return (
    <Container>
      <div className="optionButton">
        <button
          className={activeButton === 'meusJogos' ? 'selected' : 'unselected'}
          onClick={() => setActiveButton('meusJogos')}
        >
          Meus Jogos
        </button>
        <button
          className={activeButton === 'jogos' ? 'selected' : 'unselected'}
          onClick={() => setActiveButton('jogos')}
        >
          Jogos
        </button>
      </div>
      <div className="content">{children}</div>
    </Container>
  )
}
