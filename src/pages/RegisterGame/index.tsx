import { Header } from '../../components/Header'
import { Container } from './style.ts'
import { SectionRegisterGame } from '../../components/SectionRegisterGame'
import { DropZone } from '../../components/DropZone'
import { useState } from 'react'

export function RegisterGame() {
  const [selectedFile, setSelectedFile] = useState<File>()
  const handleFileUpload = (file: File | null) => {
    setSelectedFile(file ?? undefined)
  }

  console.log(selectedFile)

  return (
    <Container>
      <Header />
      <DropZone onFileUploaded={handleFileUpload} />
      <SectionRegisterGame isItAdded={false} />
    </Container>
  )
}
