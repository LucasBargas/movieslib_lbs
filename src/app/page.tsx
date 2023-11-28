import type { Metadata } from 'next';
import { IMovies } from '../interfaces/IMovies';
import { HomePage } from '../templates/HomePage';
import { getDatas } from '../libs/get-datas';

export const metadata: Metadata = {
  title: 'MoviesLibLBS',
};

const apiToken = process.env.NEXT_PUBLIC_API_TOKEN;
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const Home = async (): Promise<JSX.Element> => {
  const popularMovies: IMovies = await getDatas(
    apiToken!,
    `${apiUrl}/movie/popular?language=pt-BR&page=2`,
  );

  const topRatedMovies: IMovies = await getDatas(
    apiToken!,
    `${apiUrl}/movie/popular?language=pt-BR&page=2`,
  );

  const upcomingMovies: IMovies = await getDatas(
    apiToken!,
    `${apiUrl}/movie/upcoming?language=pt-BR&page=1`,
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
