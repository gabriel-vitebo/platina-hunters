import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 14px;
  margin-bottom: 10px;

  .header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button {
    border: none;
    background: none;
    color: ${({ theme }) => theme.COLORS.primary};
    display: flex;
    gap: 5px;
    align-items: center;
    width: 100%;
    justify-content: flex-end;
    margin-right: 15px;
    font-family: ${({ theme }) => theme.FONTS.default};
    font-size: 12px;

    .back-icon {
      color: ${({ theme }) => theme.COLORS.primary};
      cursor: pointer;
    }

    .back-button {
      background: none;
      border: none;
      font-family: ${({ theme }) => theme.FONTS.default};
      font-size: 15px;
      color: ${({ theme }) => theme.COLORS.primary};
      cursor: pointer;
    }
  }

  .game-logo {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 5px;
  }

  .delete-button {
    display: flex;
    align-items: center;
    gap: 7px;

    > svg {
      color: ${({ theme }) => theme.COLORS.redBG};
    }

    > .game-title {
      font-size: 25px;
      color: ${({ theme }) => theme.COLORS.primary};
      font-weight: bold;
      margin-top: 5px;
      position: relative;
    }
  }
`
