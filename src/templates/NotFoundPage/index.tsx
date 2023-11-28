'use client';
import * as S from './styles';
import errorIcon from '../../../public/404.png';
import Image from 'next/image';

export const NotFoundPage = () => {
  return (
    <S.NotFoundPageContainer>
      <h1>Sentimos muito, página não encontrada!</h1>
      <figure>
        <Image
          src={errorIcon}
          width={900}
          height={900}
          priority
          alt="Página não encontada!"
        />
      </figure>
    </S.NotFoundPageContainer>
  );
};
