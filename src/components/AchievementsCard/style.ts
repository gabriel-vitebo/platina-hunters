import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.COLORS.blackBG};
  border-radius: 8px;
  padding: 10px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;

  .content {
    > .isItLost {
      display: flex;
      align-items: center;
      gap: 5px;

      h2 {
        color: ${({ theme }) => theme.COLORS.primary};
      }

      span {
        font-size: 10px;
        color: ${({ theme }) => theme.COLORS.whiteBG};
      }
    }

    p {
      color: ${({ theme }) => theme.COLORS.text};
      font-size: 12px;
    }
  }

  .buttons {
    position: absolute;

    .addButton {
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      background: ${({ theme }) => theme.COLORS.greenBG};
      height: 53px;
      width: 53px;
      position: relative;
      left: 307px;
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
      position: relative;
      left: 307px;
      border-radius: 0 8px 8px 0;
    }

    svg {
      color: ${({ theme }) => theme.COLORS.white};
    }
  }
`
