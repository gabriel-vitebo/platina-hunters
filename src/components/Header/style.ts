import styled, { keyframes } from 'styled-components'

const slide = keyframes`
    0% {
        opacity: 0;
    }
    
    100%{
        opacity: 1;
    }
`

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

export const PopUp = styled.div`
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

  .popUp {
    animation: ${slide} 2s linear;
    display: flex;
    background: ${({ theme }) => theme.COLORS.white};
    justify-content: center;
    align-items: center;
    margin-left: 25px;
    border-radius: 1px 10px 10px 1px;
    width: 70%;
    height: 50px;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      left: -50px;
      top: 50%;
      transform: translateY(-50%);
      border: 25px solid ${({ theme }) => theme.COLORS.white};
      border-color: transparent ${({ theme }) => theme.COLORS.white} transparent
        transparent;
    }
  }

  ul {
    display: flex;
    justify-content: center;
    gap: 10px;

    > li {
      list-style: none;
      border-right: 1px solid ${({ theme }) => theme.COLORS.black};
      padding-right: 10px;
      button {
        background: none;
        border: none;
        font-size: 12px;
        font-family: ${({ theme }) => theme.FONTS.default};
      }
    }

    > li:nth-child(3) {
      border-right: none;
    }
  }
`
