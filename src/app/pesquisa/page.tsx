'use client';
import { useSearchParams } from 'next/navigation';
import { SearchPage } from '../../templates/SearchPage';

const Search = (): JSX.Element => {
  const queryValuePage = Number(useSearchParams().get('pagina'));
  let currentPage = queryValuePage;
  const queryValue = useSearchParams().get('filme');

  return (
    <SearchPage
      queryValue={queryValue!}
      currentPage={currentPage}
      nextHref={`/pesquisa?filme=${queryValue}&pagina=${currentPage + 1}`}
      prevHref={`/pesquisa?filme=${queryValue}&pagina=${currentPage - 1}`}
    />
  );
};

export default Search;
