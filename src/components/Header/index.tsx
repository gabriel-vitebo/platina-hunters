import logo from '../../assets/logo.jpeg'
import { BiArrowBack } from 'react-icons/bi'

import { Container, PopUp } from './style.ts'
import { useState } from 'react'

export function HeaderDetails() {
  const [popUp, setPopUp] = useState(false)

  return (
    <>
      {popUp ? (
        <PopUp>
          <img src={logo} alt="" onClick={() => setPopUp(false)} />
          <div className="popUp">
            <ul>
              <li>
                <button>Registar Jogo</button>
              </li>
              <li>
                <button>Editar Perfil</button>
              </li>
              <li>
                <button>Sair</button>
              </li>
            </ul>
          </div>
        </PopUp>
      ) : (
        <Container>
          <img src={logo} alt="" onClick={() => setPopUp(true)} />
          <h1>Platina Hunters</h1>
          <div className="button">
            <BiArrowBack size={15} />
            <button>Voltar</button>
          </div>
        </Container>
      )}
    </>
  )
}
