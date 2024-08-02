import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.whiteBG};
  border-radius: 8px;
  padding: 4px;
  margin: 10px 0;
  input {
    flex: 1;
    border: none;
    outline: none;
    padding: 5px;
    font-size: 1rem;
    color: ${({ theme }) => theme.COLORS.text};
    background-color: ${({ theme }) => theme.COLORS.whiteBG};
    border-radius: 4px 0 0 4px;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.black};
      padding-left: 5px;
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 12px;
    background-color: ${({ theme }) => theme.COLORS.whiteBG};
    border: none;
    cursor: pointer;
    border-radius: 0 4px 4px 0;
  }
`
