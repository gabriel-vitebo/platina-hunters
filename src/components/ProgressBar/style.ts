import styled from 'styled-components'

interface ContainerProps {
  progress: number
  statsSize: number
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  width: 100%;
  gap: 10px;

  .stats {
    grid-area: stats;
    align-items: center;
    color: ${({ theme }) => theme.COLORS.primary};
    display: flex;
    gap: 5px;

    > p {
      font-size: ${({ statsSize }) => statsSize}px;
      margin-right: 5px;
    }
  }

  .progress-bar {
    width: 100%;
    height: 8px;
    background-color: ${({ theme }) => theme.COLORS.whiteBG};
    border-radius: 4px;
    overflow: visible;
    position: relative;
    margin: 15px 0 15px 0;

    > .circle {
      width: 16px;
      height: 16px;
      background-color: ${({ theme }) => theme.COLORS.primary};
      border-radius: 50%;
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);
      left: calc(${({ progress }) => progress}%);
      z-index: 2;
    }
    > .progress {
      height: 100%;
      background-color: ${({ theme }) => theme.COLORS.greenBG};
    }
  }
`
