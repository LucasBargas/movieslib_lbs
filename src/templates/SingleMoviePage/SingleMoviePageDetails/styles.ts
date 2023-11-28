import styled from 'styled-components';

export const SingleMoviePageDetailsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 1rem 0 0 4rem;
  gap: 1.325rem;
  grid-column: 2 / 2;
  grid-row: 1 / 2;

  @media (max-width: 1200px) {
    padding: 0;
    grid-column: 1 / 3;
    grid-row: 2 / 3;
  }

  svg {
    fill: ${({ theme }) => theme.colors.goldenColor};
    stroke: ${({ theme }) => theme.colors.goldenColor};
  }
`;

export const SingleMoviePageDetailsTitle = styled.li`
  display: flex;
  gap: 1rem;
  padding-bottom: .5rem;
  border-bottom: 2px solid ${({ theme }) => theme.colors.goldenColor};

  h1 {
    font-size: 1.75rem;
  }

  span {
    display: flex;
    gap: .5rem;
    position: relative;
    top: 8px;
  }

  h1 {
    color: ${({ theme }) => theme.colors.goldenColor};
  }
`;

export const SingleMoviePageDetailsOriginalTitle = styled.li`
  strong {
    color: ${({ theme }) => theme.colors.goldenColor};
  }
`;

export const SingleMoviePageDetailsOriginalGenres = styled.li`
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;

    a {
      border: 2px solid ${({ theme }) => theme.colors.goldenColor};
      border-radius: .875rem;
      padding: .5rem 1rem;
      font-size: .875rem;
      font-weight: 700;
      transition: .4s;

      &:hover {
        background: ${({ theme }) => theme.colors.goldenColor};
        color: ${({ theme }) => theme.colors.primaryColor};
      }
    }
  }
`;

export const SingleMoviePageDetailsMoreInfos = styled.li`
  ul {
    display: flex;
    flex-direction: column;
    gap: .5rem;

    li {
      display: flex;
      flex-direction: column;
      gap: .25rem;

      h2 {
        display: flex;
        gap: 0.5rem;
        font-size: 1.125rem;
      }
    }
  }
`;
