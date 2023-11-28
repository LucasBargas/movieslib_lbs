'use client';
import { DefaultPage } from '../../templates/DefaultPage';
import { useSearchParams } from 'next/navigation';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const MorePopular = (): JSX.Element => {
  const queryValue = Number(useSearchParams().get('pagina'));
  let currentPage = queryValue;

  return (
    <DefaultPage
      currentPage={currentPage}
      nextHref={`/mais-populares?pagina=${currentPage + 1}`}
      prevHref={`/mais-populares?pagina=${currentPage - 1}`}
      api={`${apiUrl}/movie/popular?language=pt-BR&page=${currentPage}}`}
      title="Mais populares"
    />
  );
};

export default MorePopular;
