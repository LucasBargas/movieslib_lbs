'use client';
import React from 'react';
import { DefaultPage } from '../../templates/DefaultPage';
import { useSearchParams, redirect } from 'next/navigation';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const ToRated = (): boolean | JSX.Element => {
  const queryValue = Number(useSearchParams().get('pagina'));
  let currentPage = queryValue;

  React.useEffect(() => {
    if (!queryValue) redirect('/melhores-avaliados?pagina=1');
  }, [queryValue]);

  return (
    !!queryValue && (
      <DefaultPage
        currentPage={currentPage}
        nextHref={`/melhores-avaliados?pagina=${currentPage + 1}`}
        prevHref={`/melhores-avaliados?pagina=${currentPage - 1}`}
        api={`${apiUrl}/movie/top_rated?language=pt-BR&page=${currentPage}}`}
        title="Melhores avaliados"
      />
    )
  );
};

export default ToRated;
