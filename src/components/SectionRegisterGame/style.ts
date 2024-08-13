import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 7px 10px 10px;
  border-radius: 0 0 5px 5px;
  background-color: ${({ theme }) => theme.COLORS.secondary};

  max-height: 75vh;
  overflow-y: auto;

  .achievements {
    width: 100%;

    .stats {
      align-items: center;
      color: ${({ theme }) => theme.COLORS.primary};
      display: flex;
      gap: 5px;

      > p {
        margin-right: 5px;
        font-size: 20px;
      }
    }

    button {
      width: 100%;
      border-radius: 5px;
      padding: 5px 0;
      border: none;
      background: ${({ theme }) => theme.COLORS.primary};
      color: ${({ theme }) => theme.COLORS.white};
      font-family: ${({ theme }) => theme.FONTS.default};
    }
    .achievementBox {
      margin-top: 10px;
      height: 150px;
      overflow-y: auto;
      background: ${({ theme }) => theme.COLORS.secondary};
    }

    .buttonRegister {
      margin: 10px 0;
      background: ${({ theme }) => theme.COLORS.greenBG};

      &:disabled {
        background: ${({ theme }) => theme.COLORS.locked};
        color: ${({ theme }) => theme.COLORS.secondary};
      }
    }
  }
`
