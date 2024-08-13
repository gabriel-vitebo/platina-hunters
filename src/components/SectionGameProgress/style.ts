import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 2px 7px 10px 10px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.COLORS.secondary};

  max-height: 75vh; /* Altura máxima da section */
  overflow-y: auto; /* Scroll vertical */

  .withoutContent {
    width: 100%;
    height: 476px;
    background: ${({ theme }) => theme.COLORS.secondary};
    color: ${({ theme }) => theme.COLORS.primary};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 5px;

    > p {
      font-size: 20px;
      font-family: ${({ theme }) => theme.FONTS.default};
    }
  }

  .progress-wrapper {
    position: sticky;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.secondary};
    margin: 0;
    padding-top: 10px;
  }
`
