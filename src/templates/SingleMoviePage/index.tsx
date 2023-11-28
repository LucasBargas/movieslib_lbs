import * as S from './styles';
import { AppContainer } from '@/components/AppContainer';
import { ISingleMovie } from '@/interfaces/ISingleMovie';
import { getDatas } from '@/libs/get-datas';
import Image from 'next/image';
import { SingleMoviePageDetails } from './SingleMoviePageDetails';
import { IMovies } from '@/interfaces/IMovies';
import { ShowCase } from '@/components/ShowCase';

interface Props {
  id: string | string[];
}

const apiToken = process.env.NEXT_PUBLIC_API_TOKEN;
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const apiImg = process.env.NEXT_PUBLIC_IMG;

export const SingleMoviePage = async (props: Props): Promise<JSX.Element> => {
  const movie: ISingleMovie = await getDatas(
    apiToken!,
    `${apiUrl}/movie/${props.id}?language=pt-BR`,
  );

  const similarMovies: IMovies = await getDatas(
    apiToken!,
    `${apiUrl}/movie/${props.id}/similar?language=pt-BR&page=1`,
  );

  return (
    <S.SingleMoviePageContainer>
      <AppContainer>
        <S.SingleMoviePageArea>
          <figure>
            <Image
              src={`${apiImg}${movie.poster_path}`}
              alt={movie.title}
              width={900}
              height={900}
              quality={100}
              priority
            />
          </figure>

          <SingleMoviePageDetails movie={movie} />

          {similarMovies.results.length > 0 && (
            <S.SingleMoviePageSimilar>
              <ShowCase
                title="Filmes similares"
                movies={similarMovies}
                sliced
              />
            </S.SingleMoviePageSimilar>
          )}
        </S.SingleMoviePageArea>
      </AppContainer>
    </S.SingleMoviePageContainer>
  );
};
