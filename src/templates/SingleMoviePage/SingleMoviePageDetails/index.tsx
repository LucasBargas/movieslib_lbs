import * as S from './styles';
import { ISingleMovie } from '@/interfaces/ISingleMovie';
import Link from 'next/link';
import { FaStar } from 'react-icons/fa6';
import { BsFileEarmarkText, BsGraphUp } from 'react-icons/bs';
import { WiTime3 } from 'react-icons/wi';
import { IoWalletOutline } from 'react-icons/io5';

interface Props {
  movie: ISingleMovie;
}

export const SingleMoviePageDetails = async ({
  movie,
}: Props): Promise<JSX.Element> => {
  const handleConvertPrice = (value: number): string => {
    const currencyBR = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    return currencyBR.format(value);
  };

  return (
    <S.SingleMoviePageDetailsContainer>
      {!!movie.vote_average && !!movie.title && (
        <S.SingleMoviePageDetailsTitle>
          <span>
            <i>
              <FaStar />
            </i>
            {Number(movie.vote_average).toFixed(1)}
          </span>

          <h1>{movie.title}</h1>
        </S.SingleMoviePageDetailsTitle>
      )}

      {!!movie.original_title && (
        <S.SingleMoviePageDetailsOriginalTitle>
          <strong>Título original:</strong> {movie.original_title}
        </S.SingleMoviePageDetailsOriginalTitle>
      )}

      {!!movie.genres && (
        <S.SingleMoviePageDetailsOriginalGenres>
          <ul>
            {movie.genres.map((genre) => (
              <li key={genre.id}>
                <Link
                  href={`/filmes?genero_id=${genre.id}&pagina=1
              `}
                >
                  {genre.name}
                </Link>
              </li>
            ))}
          </ul>
        </S.SingleMoviePageDetailsOriginalGenres>
      )}

      {!!movie.tagline && !!movie.overview && (
        <S.SingleMoviePageDetailsMoreInfos>
          <ul>
            <li>
              <h2>
                <i>
                  <BsFileEarmarkText />
                </i>
                Sinopse:
              </h2>
            </li>
            <li>
              <p>{movie.tagline}</p>
              <p>{movie.overview}</p>
            </li>
          </ul>
        </S.SingleMoviePageDetailsMoreInfos>
      )}

      {!!movie.runtime && (
        <S.SingleMoviePageDetailsMoreInfos>
          <ul>
            <li>
              <h2>
                <i>
                  <WiTime3 />
                </i>
                Duração:
              </h2>
            </li>
            <li>{movie.runtime} minutos</li>
          </ul>
        </S.SingleMoviePageDetailsMoreInfos>
      )}

      {!!movie.budget && (
        <S.SingleMoviePageDetailsMoreInfos>
          <ul>
            <li>
              <h2>
                <i>
                  <IoWalletOutline />
                </i>
                Orçamento:
              </h2>
            </li>
            <li>{handleConvertPrice(movie.budget)}</li>
          </ul>
        </S.SingleMoviePageDetailsMoreInfos>
      )}

      {!!movie.revenue && (
        <S.SingleMoviePageDetailsMoreInfos>
          <ul>
            <li>
              <h2>
                <i>
                  <BsGraphUp />
                </i>
                Receita:
              </h2>
            </li>
            <li>{handleConvertPrice(movie.revenue)}</li>
          </ul>
        </S.SingleMoviePageDetailsMoreInfos>
      )}
    </S.SingleMoviePageDetailsContainer>
  );
};
