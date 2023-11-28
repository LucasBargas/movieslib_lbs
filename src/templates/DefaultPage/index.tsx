import { ShowCase } from '../../components/ShowCase';
import * as S from '../../styles/PageStyles';
import { AppContainer } from '../../components/AppContainer';
import { IMovies } from '../../interfaces/IMovies';
import { getDatas } from '../../libs/get-datas';
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
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const DefaultPage = async (props: Props) => {
  const popularMovies: IMovies = await getDatas(apiToken!, props.api);
  const { genres: genresList }: IGenres = await getDatas(
    apiToken!,
    `${apiUrl}/genre/movie/list?language=pt-BR`,
  );

  const genresListFindedById = genresList.find(
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
            genreTitle={genresListFindedById?.name}
          />
        </S.PageArea>
      </AppContainer>
    </S.PageContainer>
  );
};
