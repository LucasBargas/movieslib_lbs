import { ShowCase } from '../../components/ShowCase';
import * as S from '../../styles/PageStyles';
import { AppContainer } from '../../components/AppContainer';
import { IMovies } from '../../interfaces/IMovies';
import { getMovies } from '../../libs/get-movies';

interface Props {
  title?: string;
  queryValue?: string;
  currentPage?: number;
  nextHref: string;
  prevHref: string;
  api: string;
}

const apiToken = process.env.NEXT_PUBLIC_API_TOKEN;

export const DefaultPage = async (props: Props) => {
  const popularMovies: IMovies = await getMovies(apiToken!, props.api);

  return (
    <S.PageContainer>
      <AppContainer>
        <S.PageArea>
          <ShowCase
            title={props.title}
            movies={popularMovies}
            queryValue={props.queryValue!}
            currentPage={props.currentPage}
            nextHref={props.nextHref}
            prevHref={props.prevHref}
          />
        </S.PageArea>
      </AppContainer>
    </S.PageContainer>
  );
};
