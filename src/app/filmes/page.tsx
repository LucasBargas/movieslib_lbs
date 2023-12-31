'use client';
import { DefaultPage } from '@/templates/DefaultPage';
import { useSearchParams } from 'next/navigation';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const Movies = (): JSX.Element => {
  const queryValuePage = Number(useSearchParams().get('pagina'));
  let currentPage = queryValuePage;
  const queryValue = Number(useSearchParams().get('genero_id'));

  return (
    <DefaultPage
      queryValue={queryValue!}
      currentPage={currentPage}
      nextHref={`/filmes?genero_id=${queryValue}&pagina=${currentPage + 1}`}
      prevHref={`/filmes?genero_id=${queryValue}&pagina=${currentPage - 1}`}
      api={`${apiUrl}/discover/movie?include_adult=false&include_video=false&language=pt-BR&page=${currentPage}&sort_by=popularity.desc&with_genres=${queryValue}`}
    />
  );
};

export default Movies;
