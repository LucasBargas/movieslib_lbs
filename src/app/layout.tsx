'use client';
import StyledComponentsRegistry from '../libs/registry';
import { ThemeProvider } from 'styled-components';
import Theme from '../styles/Theme';
import Globals from '../styles/Globals';
import { Header } from '../layouts/Header';
import { AppWrapper } from '@/layouts/AppWrapper';
import { Footer } from '@/layouts/Footer';

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
            <AppWrapper>
              <Header />
              <main>{children}</main>
              <Globals />
              <Footer />
            </AppWrapper>
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
