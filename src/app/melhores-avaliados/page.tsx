'use client';
import { TopRatedPage } from '../../templates/TopRatedPage';
import { useSearchParams } from 'next/navigation';

const TopRated = (): JSX.Element => {
  const queryValue = Number(useSearchParams().get('pagina'));
  let currentPage = queryValue;

  return (
    <TopRatedPage
      currentPage={currentPage}
      nextHref={`/melhores-avaliados?pagina=${currentPage + 1}`}
      prevHref={`/melhores-avaliados?pagina=${currentPage - 1}`}
    />
  );
};

export default TopRated;
