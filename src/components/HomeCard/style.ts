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
      border-radius: 5px 0 0 0;
      background: ${{ theme }.theme.COLORS.primary};
      color: ${{ theme }.theme.COLORS.secondary};
    }

    .unselected {
      width: 50%;
      border-radius: 0 5px 0 0;
      background: ${{ theme }.theme.COLORS.secondary};
      color: ${{ theme }.theme.COLORS.primary};
    }
  }

  .content {
    width: 100%;
    height: 100%;
    padding: 2px 7px 10px 10px;
    border-radius: 0 0 5px 5px;
    background-color: ${({ theme }) => theme.COLORS.secondary};
  }
`
