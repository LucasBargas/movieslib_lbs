import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  background: ${({ theme }) => theme.colors.secondaryColor};
  padding: 1rem;
  border-radius: .25rem;

  span {
    display: flex;
    align-items: center;
    font-size: .875rem;
    gap: .375rem;

    svg {
      fill: ${({ theme }) => theme.colors.goldenColor};
    }
  }

  button {
    width: 100%;
    margin-top: 1.5rem;
  }
`;

export const CardHeader = styled.div`
  flex: 1;

  figure {
    overflow: hidden;
    width: 100%;
    border-radius: .25rem;

    &:hover {
      img {
        transform: scale(1.1);
      }
    }

    img {
      max-height: 317px;
      transition: transform .4s;
    }
  }
`;

export const CardTitle = styled.div`
  a {
    padding: 1rem 0;
    text-align: center;
    font-weight: 700;
    transition: color .4s;

    &:hover {
      color: ${({ theme }) => theme.colors.goldenColor};
    }
  }
`;
