'use client';
import { DefaultPage } from '../../templates/DefaultPage';
import { useSearchParams } from 'next/navigation';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const ToRated = (): JSX.Element => {
  const queryValue = Number(useSearchParams().get('pagina'));
  let currentPage = queryValue;

  return (
    <DefaultPage
      currentPage={currentPage}
      nextHref={`/melhores-avaliados?pagina=${currentPage + 1}`}
      prevHref={`/melhores-avaliados?pagina=${currentPage - 1}`}
      api={`${apiUrl}/movie/top_rated?language=pt-BR&page=${currentPage}}`}
      title="Melhores avaliados"
    />
  );
};

export default ToRated;
