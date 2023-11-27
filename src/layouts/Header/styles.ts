import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 8.5rem;
  background: ${({ theme }) => theme.colors.secondaryColor};
  z-index: 1000;
`;

export const HeaderArea = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 1024px) {
    gap: 1rem;
  }
`;

export const HeaderMobileButton = styled.div`
  display: none;

  @media (max-width: 1024px) {
    display: flex;
    justify-content: flex-end;
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  }

  button {
    background: transparent;

    svg {
      fill: ${({ theme }) => theme.colors.goldenColor};
      font-size: 2.25rem;
    }
  }
`;
