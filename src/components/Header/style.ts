import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  margin-top: 14px;
  margin-bottom: 40px;
  align-items: center;
  justify-content: space-around;

  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
  }

  h1 {
    font-size: 20px;
    color: ${({ theme }) => theme.COLORS.primary};
    position: relative;
    padding-bottom: 5px;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 8px;
      height: 8px;
      background-color: ${({ theme }) => theme.COLORS.primary};
      transform: rotate(45deg);
      transform-origin: bottom left;
    }
    &::after {
      content: '';
      position: absolute;
      left: 10px;
      bottom: 0;
      width: calc(100% - 10px);
      border-bottom: 1px solid ${({ theme }) => theme.COLORS.primary};
    }
  }

  .button {
    display: flex;
    align-items: center;
    gap: 5px;
    > button {
      background: none;
      border: none;
      font-family: ${({ theme }) => theme.FONTS.default};
      font-size: 15px;
      color: ${({ theme }) => theme.COLORS.primary};
    }

    > svg {
      color: ${({ theme }) => theme.COLORS.primary};
    }
  }
`
