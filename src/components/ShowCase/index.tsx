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
  // setCurrentPage?: React.Dispatch<React.SetStateAction<number>>;
  nextHref?: string;
  prevHref?: string;
}

export const ShowCase = (props: Props): JSX.Element => {
  const { push } = useRouter();
  const moviesResults: ISingleMovie[] = props.movies.results;

  return (
    <S.ShowcCaseContainer>
      {!!props.title && <h1>{props.title}</h1>}

      {!!props.queryValue && moviesResults.length > 0 && (
        <h1>Resultados para: {props.queryValue}</h1>
      )}

      {!!props.queryValue && moviesResults.length === 0 && (
        <h1>Nenhum resultado encontrado para: {props.queryValue}</h1>
      )}

      <S.ShowcCaseArea>
        {!props.sliced &&
          moviesResults &&
          moviesResults.map((movie) => <Card key={movie.id} movie={movie} />)}

        {!!props.sliced &&
          moviesResults &&
          moviesResults
            .slice(0, 10)
            .map((movie) => <Card key={movie.id} movie={movie} />)}
      </S.ShowcCaseArea>

      {!!props.sliced && props.redirect && (
        <button onClick={() => push(props.redirect!)}>Ver mais</button>
      )}

      {!props.sliced && moviesResults.length > 0 && (
        <S.ShowcasePaginationController>
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
        </S.ShowcasePaginationController>
      )}
    </S.ShowcCaseContainer>
  );
};
