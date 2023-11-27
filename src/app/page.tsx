import type { Metadata } from 'next';
import { IMovies } from '../interfaces/IMovies';
import { HomePage } from '../templates/HomePage';
import { getMovies } from '../libs/get-movies';

export const metadata: Metadata = {
  title: 'MoviesLibLBS',
};

const apiToken = process.env.NEXT_PUBLIC_API_TOKEN;
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const Home = async (): Promise<JSX.Element> => {
  const popularMovies: IMovies = await getMovies(
    apiToken!,
    `${apiUrl}/popular?language=pt-BR&page=2`,
  );

  const topRatedMovies: IMovies = await getMovies(
    apiToken!,
    `${apiUrl}/popular?language=pt-BR&page=2`,
  );

  const upcomingMovies: IMovies = await getMovies(
    apiToken!,
    `${apiUrl}/upcoming?language=pt-BR&page=1`,
  );

  return (
    <HomePage
      popularMovies={popularMovies}
      topRatedMovies={topRatedMovies}
      upcomingMovies={upcomingMovies}
    />
  );
};

export default Home;
