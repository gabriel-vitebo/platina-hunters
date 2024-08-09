import styled from 'styled-components'

interface ContainerProps {
  isModalOpen: boolean
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  background-color: ${({ theme }) => theme.COLORS.blackBG};
  border-radius: 8px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;

  .content {
    > .isItLost {
      display: flex;
      align-items: center;
      gap: 5px;
      margin: 10px 0 0 10px;

      h2 {
        color: ${({ theme }) => theme.COLORS.primary};
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1; /* Número máximo de linhas */
        -webkit-box-orient: vertical;
      }

      span {
        font-size: 10px;
        color: ${({ theme }) => theme.COLORS.whiteBG};
      }
    }

    p {
      color: ${({ theme }) => theme.COLORS.text};
      font-size: 12px;
      margin: 0 0 10px 10px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }
  }

  .buttons {
    justify-content: flex-end;

    .addButton {
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      background: ${({ theme }) => theme.COLORS.greenBG};
      height: 53px;
      width: 53px;
      border-radius: 0 8px 8px 0;
    }

    .doneButton {
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      background: ${({ theme }) => theme.COLORS.primary};
      height: 53px;
      width: 53px;
      border-radius: 0 8px 8px 0;
    }

    svg {
      color: ${({ theme }) => theme.COLORS.white};
    }
  }
`
