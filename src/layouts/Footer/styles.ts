import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.colors.secondaryColor};
  padding: 3rem 0;
`;

export const FoooterArea = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: .5rem;

  a {
    display: inline-block;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.goldenColor};
  }
`;
