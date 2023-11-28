import styled, { css } from 'styled-components';

export const HeaderNavContainer = styled.div<{ mobileNav: boolean }>`
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  padding-top: .875rem;

  @media (max-width: 1024px) {
    position: absolute;
    top: 8.5rem;
    left: 0;
    padding: 0 2rem;
    width: 100%;
    height: ${({ mobileNav }) => (mobileNav ? 'calc(100vh - 8.5rem)' : '0')};
    visibility: ${({ mobileNav }) => (mobileNav ? 'visible' : 'hidden')};
    overflow-y: ${({ mobileNav }) => (mobileNav ? 'auto' : 'hidden')};
    background: ${({ theme }) => theme.colors.secondaryColor};
    transition: .4s;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: .5rem 1.5rem;

    @media (max-width: 1024px) {
      display: block;
    }
  }
`;

export const HeadeNavItem = styled.li<{ active: boolean }>`
  a {
    color: ${({ theme, active }) => active && theme.colors.goldenColor};
    padding: .375rem 0;
    position: relative;
    transition: .4s;

    @media (max-width: 1024px) {
      padding: .875rem 0;
    }

    &:hover {
      color: ${({ theme }) => theme.colors.goldenColor};
    }

    ${({ active }) =>
      active &&
      css`
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 3px;
        background: ${({ theme }) => theme.colors.goldenColor};
        border-radius: .375rem;
      }
    `}
  }
`;
