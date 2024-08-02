import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 60px 60px auto;
  grid-template-rows: 1fr auto;
  grid-template-areas:
    'image title title'
    'image stats progress'
    'image percentage percentage';
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

  .stats {
    grid-area: stats;
    align-items: center;
    color: ${({ theme }) => theme.COLORS.primary};
    display: flex;
    gap: 5px;

    > p {
      font-size: 15px;
      margin-right: 5px;
    }
  }
`
