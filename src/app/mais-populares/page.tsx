'use client';
import { MorePopularPage } from '../../templates/MorePopularPage';
import { useSearchParams } from 'next/navigation';

const MorePopular = (): JSX.Element => {
  const queryValue = Number(useSearchParams().get('pagina'));
  let currentPage = queryValue;

  return (
    <MorePopularPage
      currentPage={currentPage}
      nextHref={`/mais-populares?pagina=${currentPage + 1}`}
      prevHref={`/mais-populares?pagina=${currentPage - 1}`}
    />
  );
};

export default MorePopular;
