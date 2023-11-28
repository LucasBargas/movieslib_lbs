'use client';
import { SingleMoviePage } from '@/templates/SingleMoviePage';
import { useParams } from 'next/navigation';

const Movie = (): JSX.Element => {
  const { id } = useParams();

  return <SingleMoviePage id={id} />;
};

export default Movie;
