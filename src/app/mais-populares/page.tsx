'use client';
import React from 'react';
import { DefaultPage } from '../../templates/DefaultPage';
import { useSearchParams, redirect } from 'next/navigation';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const MorePopular = (): boolean | JSX.Element => {
  const queryValue = Number(useSearchParams().get('pagina'));
  let currentPage = queryValue;

  React.useEffect(() => {
    if (!queryValue) redirect('/mais-populares?pagina=1');
  }, [queryValue]);

  return (
    !!queryValue && (
      <DefaultPage
        currentPage={currentPage}
        nextHref={`/mais-populares?pagina=${currentPage + 1}`}
        prevHref={`/mais-populares?pagina=${currentPage - 1}`}
        api={`${apiUrl}/movie/popular?language=pt-BR&page=${currentPage}}`}
        title="Mais populares"
      />
    )
  );
};

export default MorePopular;
