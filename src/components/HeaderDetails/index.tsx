import { BiArrowBack } from 'react-icons/bi'
import { IoIosCloseCircle, IoIosAddCircle } from 'react-icons/io'

import { Container } from './style.ts'
import { useNavigate } from 'react-router-dom'

interface HeaderDetailsProps {
  isItAdded: boolean
  image: string
  title: string
}

export function HeaderDetails({ isItAdded, image, title }: HeaderDetailsProps) {
  const navigate = useNavigate()

  return (
    <Container>
      <button className="back-button" onClick={() => navigate('/')}>
        <BiArrowBack size={15} className="back-icon" />
        voltar
      </button>
      <img src={image} alt="" className="game-logo" />
      <div className="title-content">
        <h1 className="game-title">{title}</h1>
        {isItAdded ? (
          <IoIosCloseCircle className="added" size={20} />
        ) : (
          <IoIosAddCircle className="notAdded" size={20} />
        )}
      </div>
    </Container>
  )
}
