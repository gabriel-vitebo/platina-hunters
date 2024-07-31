import logo from '../../assets/logo.jpeg'
import { BiArrowBack } from 'react-icons/bi'

import { Container } from './style.ts'

export function Header() {
  return (
    <Container>
      <img src={logo} alt="" />
      <h1>Platina Hunters</h1>
      <div className="button">
        <BiArrowBack size={15} />
        <button>Voltar</button>
      </div>
    </Container>
  )
}
