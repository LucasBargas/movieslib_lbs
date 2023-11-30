'use client';
import React from 'react';
import { DefaultPage } from '../../templates/DefaultPage';
import { useSearchParams, redirect } from 'next/navigation';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const NowPlaying = (): boolean | JSX.Element => {
  const queryValue = Number(useSearchParams().get('pagina'));
  let currentPage = queryValue;

  React.useEffect(() => {
    if (!queryValue) redirect('/em-cartaz?pagina=1');
  }, [queryValue]);

  return (
    !!queryValue && (
      <DefaultPage
        currentPage={currentPage}
        nextHref={`/em-cartaz?pagina=${currentPage + 1}`}
        prevHref={`/em-cartaz?pagina=${currentPage - 1}`}
        api={`${apiUrl}/movie/now_playing?language=pt-BR&page=${currentPage}`}
        title="Em cartaz"
      />
    )
  );
};

export default NowPlaying;
