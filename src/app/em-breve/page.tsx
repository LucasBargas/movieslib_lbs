'use client';
import { DefaultPage } from '../../templates/DefaultPage';
import { useSearchParams } from 'next/navigation';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const Upcoming = (): JSX.Element => {
  const queryValue = Number(useSearchParams().get('pagina'));
  let currentPage = queryValue;

  return (
    <DefaultPage
      currentPage={currentPage}
      nextHref={`/em-breve?pagina=${currentPage + 1}`}
      prevHref={`/em-breve?pagina=${currentPage - 1}`}
      api={`${apiUrl}/movie/upcoming?language=pt-BR&page=${currentPage}}`}
      title="Em breve"
    />
  );
};

export default Upcoming;
