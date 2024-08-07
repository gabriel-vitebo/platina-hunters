import styled from 'styled-components'

interface ContainerProps {
  progress: number
}

export const Container = styled.div<ContainerProps>`
  display: grid;
  grid-template-columns: 60px auto;
  grid-template-rows: 1fr auto;
  grid-template-areas:
    'image title'
    'image progress'
    'image percentage';
  background-color: ${({ theme }) => theme.COLORS.blackBG};
  border-radius: 8px;
  padding: 10px;
  width: 100%;
  align-items: center;
  margin-bottom: 10px;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;

    grid-area: image;
  }

  h2 {
    grid-area: title;
    color: ${({ theme }) => theme.COLORS.primary};
  }

  > div {
    grid-area: progress;
    width: 100%;
  }

  .percentage {
    grid-area: percentage;
    display: flex;
    justify-content: flex-end;

    > p {
      color: ${({ theme }) => theme.COLORS.primary};
      font-weight: 700;
    }
  }
`
