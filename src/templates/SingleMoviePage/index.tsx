import { AppContainer } from '@/components/AppContainer';
import { ISingleMovie } from '@/interfaces/ISingleMovie';
import { getMovies } from '@/libs/get-movies';

interface Props {
  id: string | string[];
}

const apiToken = process.env.NEXT_PUBLIC_API_TOKEN;
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const SingleMoviePage = async (props: Props) => {
  const movie: ISingleMovie = await getMovies(
    apiToken!,
    `${apiUrl}/${props.id}?language=pt-BR`,
  );

  return (
    <div>
      <AppContainer>
        <h1>{movie.title}</h1>
      </AppContainer>
    </div>
  );
};
