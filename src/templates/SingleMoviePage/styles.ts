import styled from 'styled-components';

export const SingleMoviePageContainer = styled.section`
  padding: 3rem 0;
`;

export const SingleMoviePageArea = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  >figure {
    padding: 1.5rem;
    background: ${({ theme }) => theme.colors.secondaryColor};
    border-radius: .25rem;
    grid-column: 1 / 2;
    grid-row: 1 / 2;

    @media (max-width: 1200px) {
      grid-column: 1 / 3;
      grid-row: 1 / 2;
      width: 70%;
      margin: 0 auto;
    }

    @media (max-width: 480px) {
      width: 100%;
    }
  }
`;

export const SingleMoviePageSimilar = styled.div`
  grid-column: 1 / 3;
  grid-row: 2 / 3;
  padding-top: 2.5rem;

  @media (max-width: 1200px) {
    padding-top: 0;
    grid-column: 1 / 3;
    grid-row: 3 / 4;
  }
`;
