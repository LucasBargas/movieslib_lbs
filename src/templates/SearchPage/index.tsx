import { ShowCase } from '../../components/ShowCase';
import * as S from '../../styles/PageStyles';
import { AppContainer } from '../../components/AppContainer';
import { getMovies } from '../../libs/get-movies';
import { IMovies } from '../../interfaces/IMovies';

interface Props {
  queryValue: string;
  currentPage?: number;
  nextHref: string;
  prevHref: string;
}

const apiToken = process.env.NEXT_PUBLIC_API_TOKEN;
const apiSearchUrl = process.env.NEXT_PUBLIC_SEARCH;

export const SearchPage = async (props: Props) => {
  const searchedMovies: IMovies = await getMovies(
    apiToken!,
    `${apiSearchUrl}?query=${props.queryValue!}&include_adult=false&language=pt-BR&page=${
      props.currentPage
    }`,
  );

  return (
    <S.PageContainer>
      <AppContainer>
        <S.PageArea>
          <ShowCase
            movies={searchedMovies}
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
