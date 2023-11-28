import { ShowCase } from '../../components/ShowCase';
import * as S from '../../styles/PageStyles';
import { AppContainer } from '../../components/AppContainer';
import { IMovies } from '../../interfaces/IMovies';
import { getMovies } from '../../libs/get-movies';
import { IGenres } from '@/interfaces/IGenres';

interface Props {
  title?: string;
  queryValue?: string | number;
  currentPage?: number;
  nextHref: string;
  prevHref: string;
  api: string;
  genreTitle?: string;
}

const apiToken = process.env.NEXT_PUBLIC_API_TOKEN;
const apiGenreUrl = process.env.NEXT_PUBLIC_API_GENRE;

const getGenresList = async (): Promise<IGenres> => {
  const options = {
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${apiToken}`,
    },
  };

  const res = await fetch(`${apiGenreUrl}/list?language=pt-BR`, options);

  const genres: IGenres = await res.json();

  return genres;
};

export const DefaultPage = async (props: Props) => {
  const popularMovies: IMovies = await getMovies(apiToken!, props.api);

  const genresList = await getGenresList();

  const genresListFindedById = genresList.genres.find(
    (genre) =>
      typeof props.queryValue === 'number' && genre.id === props.queryValue,
  );

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
            genreTitle={genresListFindedById!.name}
          />
        </S.PageArea>
      </AppContainer>
    </S.PageContainer>
  );
};
