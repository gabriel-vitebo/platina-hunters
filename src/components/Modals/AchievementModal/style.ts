import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: transparent;
  color: ${({ theme }) => theme.COLORS.text};
  z-index: 2;

  .Content {
    width: 95%;
    height: 500px;
    left: 2%;
    top: 0;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    background-color: ${({ theme }) => theme.COLORS.blackBG};
    border-radius: 5px;
    z-index: 1000;
    border: 2px solid ${({ theme }) => theme.COLORS.primary};
    position: relative;
    padding: 20px;
  }

  p {
    font-size: 16px;
    line-height: 1.5;
  }
  button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    svg {
      color: ${({ theme }) => theme.COLORS.white};
    }
  }

  .header {
    display: flex;
    gap: 5px;
    justify-content: center;
    align-items: center;

    h2 {
      font-size: 20px;
      color: ${({ theme }) => theme.COLORS.primary};
      text-align: center;
    }

    svg {
      color: ${({ theme }) => theme.COLORS.greenBG};
    }
  }
`
