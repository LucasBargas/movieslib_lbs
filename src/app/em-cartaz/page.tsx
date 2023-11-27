'use client';
import { NowPlayingPage } from '../../templates/NowPlayingPage';
import { useSearchParams } from 'next/navigation';

const NowPlaying = (): JSX.Element => {
  const queryValue = Number(useSearchParams().get('pagina'));
  let currentPage = queryValue;

  return (
    <NowPlayingPage
      currentPage={currentPage}
      nextHref={`/em-breve?pagina=${currentPage + 1}`}
      prevHref={`/em-breve?pagina=${currentPage - 1}`}
    />
  );
};

export default NowPlaying;
