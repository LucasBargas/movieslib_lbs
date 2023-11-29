import { AppContainer } from '@/components/AppContainer';
import * as S from './styles';

export const Footer = () => {
  return (
    <S.FooterContainer>
      <AppContainer>
        <S.FoooterArea>
          <p>
            Esta aplicação web foi desenvolvida por{' '}
            <a
              target="_blank"
              href="https://projetoslucasbargas.vercel.app/"
              rel="noopener noreferrer"
            >
              Lucas Bargas
            </a>{' '}
            com base em um layout apresentado pelo Matheus Battisti, do{' '}
            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=XqxUHVVO7-U"
              rel="noopener noreferrer"
            >
              Hora de Codar
            </a>{' '}
            no youtube mas com alterações na interface e acréscimos de recursos.
          </p>

          <a
            href="https://github.com/LucasBargas/movieslib_lbs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Clique aqui para visualizar o repositório no GitHub
          </a>
        </S.FoooterArea>
      </AppContainer>
    </S.FooterContainer>
  );
};
