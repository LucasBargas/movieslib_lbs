'use client';
import { ShowCase } from '../../components/ShowCase';
import * as S from '../../styles/PageStyles';
import { AppContainer } from '../../components/AppContainer';
import { IMovies } from '../../interfaces/IMovies';

interface Props {
  popularMovies: IMovies;
  topRatedMovies: IMovies;
  upcomingMovies: IMovies;
}

export const HomePage = (props: Props): JSX.Element => {
  const { popularMovies, topRatedMovies, upcomingMovies } = props;

  return (
    <S.PageContainer>
      <AppContainer>
        <S.PageArea>
          <ShowCase
            title="Mais populares"
            movies={popularMovies}
            redirect="/mais-populares"
            sliced
          />
          <ShowCase
            title="Melhores avaliados"
            movies={topRatedMovies}
            redirect="/melhores-avaliados"
            sliced
          />
          <ShowCase
            title="Em breve"
            movies={upcomingMovies}
            redirect="/em-breve"
            sliced
          />
        </S.PageArea>
      </AppContainer>
    </S.PageContainer>
  );
};
