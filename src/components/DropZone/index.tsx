import { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { FiUpload } from 'react-icons/fi'
import { Container, ImageWrapper } from './style.ts'
import { IoCloseSharp } from 'react-icons/io5'

interface Props {
  onFileUploaded: (file: File | null) => void
}

export function DropZone({ onFileUploaded }: Props) {
  const [selectedFileUrl, setSelectedFileUrl] = useState<string>('')

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0]

      const fileUrl = URL.createObjectURL(file)

      setSelectedFileUrl(fileUrl)
      onFileUploaded(file)
    },
    [onFileUploaded],
  )

  const removeFile = () => {
    setSelectedFileUrl('')
    onFileUploaded(null)
  }

  const { getRootProps, getInputProps, open } = useDropzone({
    onDrop,
    accept: {
      'image/*': [],
    },
    noClick: selectedFileUrl !== '',
  })

  return (
    <Container {...getRootProps()}>
      <input {...getInputProps()} accept="image/*" />

      {selectedFileUrl ? (
        <ImageWrapper>
          <img
            src={selectedFileUrl}
            alt="Imagem do ponto de coleta inserida pelo usuário"
            className="uploaded-img"
            onClick={open} // Permite trocar a imagem ao clicar na imagem atual
          />
          <IoCloseSharp size={24} onClick={removeFile} />
        </ImageWrapper>
      ) : (
        <p>
          <FiUpload size={25} />
          Imagem do Jogo
        </p>
      )}
    </Container>
  )
}
