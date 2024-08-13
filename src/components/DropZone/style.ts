import styled from 'styled-components'

export const Container = styled.div`
  height: 200px;
  width: 100%;
  background: ${({ theme }) => theme.COLORS.secondary};
  border-radius: 10px 10px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  outline: 0;

  .uploaded-img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    position: relative;
  }

  .removeImage {
    position: absolute;
    right: 100px;
    top: 200px;
    color: ${({ theme }) => theme.COLORS.redBG};
  }

  p {
    width: calc(100% - 60px);
    height: calc(100% - 60px);
    border-radius: 10px;
    border: 1px dashed ${({ theme }) => theme.COLORS.primary};

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.COLORS.primary};
    font-family: ${({ theme }) => theme.FONTS.default};
  }

  .dropzone p svg {
    color: ${({ theme }) => theme.COLORS.primary};
    margin-bottom: 8px;
  }
`

export const ImageWrapper = styled.div`
  display: flex;
  align-items: flex-start; /* Alinha itens ao topo */
  justify-content: flex-end; /* Move o ícone para a direita */
  position: relative;
  width: 150px; /* Largura da imagem */
  height: 150px; /* Altura da imagem */

  img.uploaded-img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }

  svg {
    cursor: pointer; /* Cursor de mão ao passar sobre o ícone */
    color: ${({ theme }) => theme.COLORS.redBG};
    margin-left: -24px; /* Ajusta o ícone para ficar sobre a borda da imagem */
  }
`
