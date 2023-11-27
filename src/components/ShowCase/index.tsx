'use client';
import * as S from './styles';
import { IMovies } from '../../interfaces/IMovies';
import { Card } from '../Card';
import { useRouter } from 'next/navigation';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Link from 'next/link';
import { ISingleMovie } from '@/interfaces/ISingleMovie';

interface Props {
  movies: IMovies;
  title?: string;
  redirect?: string;
  sliced?: boolean;
  queryValue?: string;
  currentPage?: number;
  nextHref?: string;
  prevHref?: string;
}

export const ShowCase = (props: Props): JSX.Element => {
  const { push } = useRouter();
  const moviesResults: ISingleMovie[] = props.movies.results;

  const handleTitleShowCase = (value: string): string => {
    return `${value.charAt(0).toUpperCase()}${value
      .slice(1, value.length)
      .toLowerCase()}`;
  };

  return (
    <S.ShowCaseContainer>
      {!!props.title && (
        <S.ShowCaseTitle>
          <h1>{handleTitleShowCase(props.title)}</h1>
          {!props.sliced && (
            <small>{props.movies.total_results} resultados</small>
          )}
        </S.ShowCaseTitle>
      )}

      {!!props.queryValue && moviesResults.length > 0 && (
        <S.ShowCaseTitle>
          {<h1>{handleTitleShowCase(props.queryValue)}</h1>}{' '}
          <small>
            {props.movies.total_results}{' '}
            {moviesResults.length === 1 ? 'resultado' : 'resultados'}
          </small>
        </S.ShowCaseTitle>
      )}

      {!!props.queryValue && moviesResults.length === 0 && (
        <S.ShowCaseTitle>
          <h1>
            Nenhum resultado encontrado para:{' '}
            {handleTitleShowCase(props.queryValue)}
          </h1>
        </S.ShowCaseTitle>
      )}

      <S.ShowCaseArea>
        {!props.sliced &&
          moviesResults &&
          moviesResults.map((movie) => <Card key={movie.id} movie={movie} />)}

        {!!props.sliced &&
          moviesResults &&
          moviesResults
            .slice(0, 10)
            .map((movie) => <Card key={movie.id} movie={movie} />)}
      </S.ShowCaseArea>

      {!!props.sliced && props.redirect && (
        <button onClick={() => push(props.redirect!)}>Ver mais</button>
      )}

      {!props.sliced && moviesResults.length > 0 && (
        <S.ShowCasePaginationController>
          {props.currentPage! > 1 && (
            <Link href={props.prevHref!}>
              <i>
                <FaChevronLeft />
              </i>{' '}
              Anterior
            </Link>
          )}

          <div>
            <span>{props.currentPage}</span> de{' '}
            <span>{props.movies.total_pages!}</span>
          </div>

          {props.currentPage! < props.movies.total_pages! && (
            <Link href={props.nextHref!}>
              Próximo{' '}
              <i>
                <FaChevronRight />
              </i>{' '}
            </Link>
          )}
        </S.ShowCasePaginationController>
      )}
    </S.ShowCaseContainer>
  );
};
