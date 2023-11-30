'use client';
import React from 'react';
import { DefaultPage } from '../../templates/DefaultPage';
import { useSearchParams, redirect } from 'next/navigation';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const Upcoming = (): boolean | JSX.Element => {
  const queryValue = Number(useSearchParams().get('pagina'));
  let currentPage = queryValue;

  React.useEffect(() => {
    if (!queryValue) redirect('/em-breve?pagina=1');
  }, [queryValue]);

  return (
    !!queryValue && (
      <DefaultPage
        currentPage={currentPage}
        nextHref={`/em-breve?pagina=${currentPage + 1}`}
        prevHref={`/em-breve?pagina=${currentPage - 1}`}
        api={`${apiUrl}/movie/upcoming?language=pt-BR&page=${currentPage}}`}
        title="Em breve"
      />
    )
  );
};

export default Upcoming;
