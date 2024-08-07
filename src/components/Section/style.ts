import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 2px 7px 10px 10px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.COLORS.secondary};

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
`
