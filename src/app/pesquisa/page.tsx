'use client';
import { useSearchParams } from 'next/navigation';
import { DefaultPage } from '../../templates/DefaultPage';

const apiSearchUrl = process.env.NEXT_PUBLIC_SEARCH;

const Search = (): JSX.Element => {
  const queryValuePage = Number(useSearchParams().get('pagina'));
  let currentPage = queryValuePage;
  const queryValue = useSearchParams().get('filme');

  return (
    <DefaultPage
      queryValue={queryValue!}
      currentPage={currentPage}
      nextHref={`/pesquisa?filme=${queryValue}&pagina=${currentPage + 1}`}
      prevHref={`/pesquisa?filme=${queryValue}&pagina=${currentPage - 1}`}
      api={`${apiSearchUrl}?query=${queryValue!}&include_adult=false&language=pt-BR&page=${currentPage}`}
    />
  );
};

export default Search;
