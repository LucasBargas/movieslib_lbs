'use client';
import { UpcomingPage } from '../../templates/UpcomingPage';
import { useSearchParams } from 'next/navigation';

const Upcoming = (): JSX.Element => {
  const queryValue = Number(useSearchParams().get('pagina'));
  let currentPage = queryValue;

  return (
    <UpcomingPage
      currentPage={currentPage}
      nextHref={`/em-breve?pagina=${currentPage + 1}`}
      prevHref={`/em-breve?pagina=${currentPage - 1}`}
    />
  );
};

export default Upcoming;
