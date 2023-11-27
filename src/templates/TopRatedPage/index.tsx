import { ShowCase } from '../../components/ShowCase';
import * as S from '../../styles/PageStyles';
import { AppContainer } from '../../components/AppContainer';
import { IMovies } from '../../interfaces/IMovies';
import { getMovies } from '../../libs/get-movies';

interface Props {
  currentPage?: number;
  nextHref: string;
  prevHref: string;
}

const apiToken = process.env.NEXT_PUBLIC_API_TOKEN;
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const TopRatedPage = async (props: Props) => {
  const topRatedMovies: IMovies = await getMovies(
    apiToken!,
    `${apiUrl}/top_rated?language=pt-BR&page=${props.currentPage}`,
  );

  return (
    <S.PageContainer>
      <AppContainer>
        <S.PageArea>
          <ShowCase
            title="Melhores avaliados"
            movies={topRatedMovies}
            currentPage={props.currentPage}
            nextHref={props.nextHref}
            prevHref={props.prevHref}
          />
        </S.PageArea>
      </AppContainer>
    </S.PageContainer>
  );
};
