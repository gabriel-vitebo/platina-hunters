import logo from '../../assets/logo.jpeg'
import { BiArrowBack } from 'react-icons/bi'
import { IoIosCloseCircle } from 'react-icons/io'

import { Container } from './style.ts'

export function HeaderDetails() {
  return (
    <Container>
      <button className="back-button">
        <BiArrowBack size={15} className="back-icon" />
        voltar
      </button>
      <img src={logo} alt="Elden Ring" className="game-logo" />
      <div className="delete-button">
        <h1 className="game-title">Elden Ring</h1>
        <IoIosCloseCircle size={20} />
      </div>
    </Container>
  )
}
