'use client';
import styled, { keyframes } from 'styled-components';

export const loadingAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: 3rem 0;
  gap: 1.5rem;

  div {
    &::after {
      content: " ";
      display: block;
      width: 2.25rem;
      height: 2.25rem;
      margin: .5rem;
      border-radius: 50%;
      border: 7px solid ${({ theme }) => theme.colors.goldenColor};
      border-color: ${({ theme }) => theme.colors.goldenColor} transparent ${({
        theme,
      }) => theme.colors.goldenColor} transparent;
      animation: ${loadingAnimation} .625s linear infinite;
    }
  }

  span {
    font-weight: 700;
  }
`;
