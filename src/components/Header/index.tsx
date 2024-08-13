import logo from '../../assets/logo.jpeg'
import { BiArrowBack } from 'react-icons/bi'

import { Container, PopUp } from './style.ts'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function Header() {
  const [popUp, setPopUp] = useState(false)

  const navigate = useNavigate()

  return (
    <>
      {popUp ? (
        <PopUp>
          <img src={logo} alt="" onClick={() => setPopUp(false)} />
          <div className="popUp">
            <ul>
              <li>
                <button onClick={() => navigate('/registergame')}>
                  Registar Jogo
                </button>
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
            <button onClick={() => navigate('/')}>Voltar</button>
          </div>
        </Container>
      )}
    </>
  )
}
