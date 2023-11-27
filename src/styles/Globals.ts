import { createGlobalStyle } from 'styled-components';

const Globals = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Helvetica, sans-serif;
    color: ${({ theme }) => theme.colors.lightColor};
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: ${({ theme }) => theme.colors.primaryColor};

    main {
      padding-top: 8.5rem;
    }

    ul, li {
      list-style: none;
    }

    input, textarea, button {
      outline: none;
      border: none;
      color: ${({ theme }) => theme.colors.primaryColor};
    }

    button {
      display: block;
      cursor: pointer;
    }

    p {
      line-height: 1.425rem;
      color: ${({ theme }) => theme.colors.lightColor};
    }

    a {
      display: block;
      text-decoration: none;
    }

    input, label, img, svg, span, button {
      display: block;
    }

    img {
      height: 100%;
      width: 100%;
    }
  }
`;

export default Globals;
