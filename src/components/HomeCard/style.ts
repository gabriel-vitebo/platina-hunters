import styled from 'styled-components'
import theme from '../../styles/theme.ts'

export const Container = styled.div`
  .optionButton {
    > button {
      background: none;
      border: none;
    }

    .selected,
    .unselected {
      padding: 5px 15px 5px 15px;
      border: 1px solid ${{ theme }.theme.COLORS.primary};
    }

    .selected {
      width: 50%;
      background: ${{ theme }.theme.COLORS.primary};
      color: ${{ theme }.theme.COLORS.secondary};
    }

    .unselected {
      width: 50%;
      background: ${{ theme }.theme.COLORS.secondary};
      color: ${{ theme }.theme.COLORS.primary};
    }

    .myGamesBorder {
      border-radius: 5px 0 0 0;
    }

    .gamesBorder {
      border-radius: 0 5px 0 0;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 2px 7px 10px 10px;
    border-radius: 0 0 5px 5px;
    background-color: ${({ theme }) => theme.COLORS.secondary};
  }

  .withoutContent {
    width: 100%;
    height: 476px;
    background: ${({ theme }) => theme.COLORS.secondary};
    color: ${({ theme }) => theme.COLORS.primary};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 0 0 5px 5px;

    > p {
      font-size: 20px;
      font-family: ${({ theme }) => theme.FONTS.default};
    }
  }
`
