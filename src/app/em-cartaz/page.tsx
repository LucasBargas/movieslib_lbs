'use client';
import { DefaultPage } from '../../templates/DefaultPage';
import { useSearchParams } from 'next/navigation';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const NowPlaying = (): JSX.Element => {
  const queryValue = Number(useSearchParams().get('pagina'));
  let currentPage = queryValue;

  return (
    <DefaultPage
      currentPage={currentPage}
      nextHref={`/em-cartaz?pagina=${currentPage + 1}`}
      prevHref={`/em-cartaz?pagina=${currentPage - 1}`}
      api={`${apiUrl}/now_playing?language=pt-BR&page=${currentPage}`}
      title="Em cartaz"
    />
  );
};

export default NowPlaying;
