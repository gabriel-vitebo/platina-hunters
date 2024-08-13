import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 8px;
  margin: 10px 0;
`

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 1rem;
  color: ${({ theme }) => theme.COLORS.text};

  input[type='checkbox'] {
    font-family: ${({ theme }) => theme.FONTS.default};
    margin-right: 8px;
    accent-color: ${({ theme }) => theme.COLORS.primary};
  }
`
