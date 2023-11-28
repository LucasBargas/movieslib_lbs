import styled from 'styled-components';

export const NotFoundPageContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height :calc(100vh + 2rem - 9.75rem);
  padding: 2rem;
  gap: 1.5rem;

  h1 {
    color: ${({ theme }) => theme.colors.goldenColor};
    font-size: 1.5rem;
  }

  img {
    width: 160px;
  }
`;
