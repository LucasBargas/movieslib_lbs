import styled from 'styled-components';

export const ShowCaseContainer = styled.div`
  >button {
    margin-top: 2rem;
    position: relative;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    min-width: 160px;
  }

  button {
    background: ${({ theme }) => theme.colors.goldenColor};
    border: 2px solid ${({ theme }) => theme.colors.goldenColor};
    font-weight: 700;
    font-size: 1rem;
    border-radius: .25rem;
    padding: .75rem;
    transition: .4s;

    &:hover {
      background: transparent;
      color: ${({ theme }) => theme.colors.goldenColor};
    }
  }
`;

export const ShowCaseArea = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 608px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const ShowCasePaginationController = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 3rem;

  span, a  {
    font-size: .9325rem;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      padding: .5rem .625rem;
      color: ${({ theme }) => theme.colors.lightColor};
      border-radius: .25rem;

      &:first-of-type {
        background: ${({ theme }) => theme.colors.secondaryColor};
        margin-right: .5rem;
        font-weight: 600;
      }
    }
  }

  a {
    display: flex;
    align-items: center;
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.colors.goldenColor};
    gap: .375rem;
    transition: .4s;

    &:hover {
      filter: brightness(.8);
    }

    &:nth-of-type(1) {
      margin-right: .75rem;
    }

    &:nth-of-type(2) {
      margin-left: .75rem;
    }

    i {
      position: relative;
      top: 1px;

      svg {
        fill: ${({ theme }) => theme.colors.goldenColor};
      }
    }
  }
`;

export const ShowCaseTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: .125rem;
  padding-bottom: 2.5rem;

  h1 {
    font-size: 1.5rem;
  }

  small {
    display: block;
    margin-top: .5rem;
    font-size: .9375rem;
  }
`;
