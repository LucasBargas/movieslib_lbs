'use client';
import StyledComponentsRegistry from '../libs/registry';
import { ThemeProvider } from 'styled-components';
import Theme from '../styles/Theme';
import Globals from '../styles/Globals';
import { Header } from '../layouts/Header';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body suppressHydrationWarning={true}>
        <StyledComponentsRegistry>
          <ThemeProvider theme={Theme}>
            <Header />
            <main>{children}</main>
            <Globals />
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
