import styled from 'styled-components';

export const HeaderLogoContainer = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 2;

  a {
    display: flex;
    width: 100%;
    max-width: 195px;
    align-items: center;

    &:hover {
      svg, span {
        filter: brightness(.8);
      }
    }

    svg, span {
      display: inline-block;
      color: ${({ theme }) => theme.colors.goldenColor};
      fill: ${({ theme }) => theme.colors.goldenColor};
      transition: .4s;
      font-size: 1.5rem;
    }

    span {
      font-weight: 700;
      margin-left: .25rem;
    }
  }
`;
