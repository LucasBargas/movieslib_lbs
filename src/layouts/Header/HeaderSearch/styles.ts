import styled from 'styled-components';

export const HeaderSearchContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  grid-column: 2 / 3;
  grid-row: 1 / 3;
  gap: .5rem;

  @media (max-width: 1024px) {
    grid-column: 1 / 3;
    grid-row: 2 / 3;
  }

  div {
    width: 100%;
    max-width: 400px;
    position: relative;

    @media (max-width: 1024px) {
      max-width: none;
    }

    input {
      width: 100%;
      height: 38px;
      border-radius: .25rem;
      padding: 0px 2.325rem 0px 0.875rem;
      border: 2px solid transparent;

      &:hover, &:focus {
        border-color: ${({ theme }) => theme.colors.goldenColor};
        background: ${({ theme }) => theme.colors.secondaryColor};
        color: ${({ theme }) => theme.colors.lightColor};

        &::placeholder {
          color: ${({ theme }) => theme.colors.lightColor};
        }
      }

      &::placeholder {
        color: ${({ theme }) => theme.colors.primaryColor};
      }
    }

    button[type="button"] {
      background: transparent;
      transform: translateY(-50%);
      position: absolute;
      top: 50%;
      right: .375rem;
      cursor: pointer;

      svg {
        fill: ${({ theme }) => theme.colors.goldenColor};
        font-size: 1.25rem;
      }
    }
  }

  button[type="submit"] {
    border-radius: .25rem;
    padding: 0 .5rem;
    height: 38px;
    background: ${({ theme }) => theme.colors.goldenColor};
    border: 2px solid transparent;
    transition: .4s;

    &:hover {
      background: transparent;
      border-color: ${({ theme }) => theme.colors.goldenColor};

      svg {
        fill: ${({ theme }) => theme.colors.goldenColor};
      }
    }

    svg {
      fill: ${({ theme }) => theme.colors.secondaryColor};
      font-size: 1.375rem;
      transition: .4s;
    }
  }
`;
