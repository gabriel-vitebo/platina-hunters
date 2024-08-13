import { useState } from 'react'

import { Container } from './style.ts'
import { MainInput } from '../MainInput'
import { MyGamesCard } from '../MyGamesCard'
import assassinsCreedImage from '../../assets/assassinscreed.png'
import eldenringImage from '../../assets/eldenring.png'
import hogwartsLegacyImage from '../../assets/hogwartsLegacy.png'
import godOfWarImage from '../../assets/godOfWar.png'

import { GamesCard } from '../GamesCard'

export function SectionHome() {
  const [currentActiveButton, setCurrentActiveButton] = useState<
    'myGames' | 'games'
  >('myGames')

  return (
    <Container>
      <div className="optionButton">
        <button
          className={`${currentActiveButton === 'myGames' ? 'selected' : 'unselected'} myGamesBorder`}
          onClick={() => setCurrentActiveButton('myGames')}
        >
          Meus Jogos
        </button>
        <button
          className={`${currentActiveButton === 'games' ? 'selected' : 'unselected'} gamesBorder`}
          onClick={() => setCurrentActiveButton('games')}
        >
          Jogos
        </button>
      </div>
      <div className="content">
        <MainInput
          placeholder="Pesquisar Jogo"
          hasIcon={true}
          value=""
          onChange={() => {}}
        />
        {currentActiveButton === 'myGames' ? (
          <>
            <MyGamesCard
              image={assassinsCreedImage}
              title="Assassin's Creed Odyssey"
              total={93}
              completed={38}
              progress={43}
              isItAdded={true}
            />
            <MyGamesCard
              image={eldenringImage}
              title="Elden Ring"
              total={42}
              completed={4}
              progress={9}
              isItAdded={true}
            />
            <MyGamesCard
              image={hogwartsLegacyImage}
              title="Hogwarts Legacy"
              total={45}
              completed={45}
              progress={100}
              isItAdded={true}
            />
          </>
        ) : (
          <>
            <GamesCard
              title="Assassin's Creed Odyssey"
              image={assassinsCreedImage}
              totalAchievement={93}
              isItAdded={true}
            />
            <GamesCard
              title="Elden Ring"
              image={eldenringImage}
              totalAchievement={42}
              isItAdded={true}
            />
            <GamesCard
              title="God of War"
              image={godOfWarImage}
              totalAchievement={37}
              isItAdded={false}
            />
            <GamesCard
              title="Hogwarts Legacy"
              image={hogwartsLegacyImage}
              totalAchievement={45}
              isItAdded={true}
            />
          </>
        )}
      </div>
      )
    </Container>
  )
}

/// <div className="withoutContent">
// <BsController size={150}/>
// <p>Nenhum Jogo Encontrado</p>
// </div>
