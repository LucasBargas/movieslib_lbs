import { ISingleMovie } from '../../interfaces/ISingleMovie';
import * as S from './styles';
import Image from 'next/image';
import Link from 'next/link';
import { FaStar } from 'react-icons/fa6';

interface Props {
  movie: ISingleMovie;
}

const apiImg = process.env.NEXT_PUBLIC_IMG;

export const Card = ({ movie }: Props) => {
  return (
    <S.CardContainer>
      <S.CardHeader>
        <figure>
          <Link href={`/filme/${movie.id}`}>
            <Image
              src={`${apiImg}${movie.poster_path}`}
              width={900}
              height={900}
              quality={100}
              priority
              alt={movie.title}
            />
          </Link>
        </figure>

        <S.CardTitle>
          <Link href={`/filme/${movie.id}`}>{movie.title}</Link>
        </S.CardTitle>
      </S.CardHeader>

      <span>
        <i>
          <FaStar />
        </i>
        {Number(movie.vote_average).toFixed(1)}
      </span>

      <button>Detalhes</button>
    </S.CardContainer>
  );
};
