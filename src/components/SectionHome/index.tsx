import { ReactNode, useState } from 'react'
import { BsController } from 'react-icons/bs'

import { Container } from './style.ts'
import { Search } from '../Search'

interface SectionHomeProps {
  children?: ReactNode
}

export function SectionHome({ children }: SectionHomeProps) {
  const [activeButton, setActiveButton] = useState<'myGames' | 'games'>(
    'myGames',
  )

  return (
    <Container>
      <div className="optionButton">
        <button
          className={`${activeButton === 'myGames' ? 'selected' : 'unselected'} myGamesBorder`}
          onClick={() => setActiveButton('myGames')}
        >
          Meus Jogos
        </button>
        <button
          className={`${activeButton === 'games' ? 'selected' : 'unselected'} gamesBorder`}
          onClick={() => setActiveButton('games')}
        >
          Jogos
        </button>
      </div>

      {children ? (
        <div className="content">
          <Search />

          {children}
        </div>
      ) : (
        <div className="withoutContent">
          <BsController size={150} />
          <p>Nenhum Jogo Encontrado</p>
        </div>
      )}
    </Container>
  )
}
