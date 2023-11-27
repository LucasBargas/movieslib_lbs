import Link from 'next/link';
import * as S from './styles';
import { MdMovieFilter } from 'react-icons/md';

interface Props {
  setMobileNav: React.Dispatch<React.SetStateAction<boolean>>;
}

export const HeaderLogo = (props: Props) => {
  return (
    <S.HeaderLogoContainer onClick={() => props.setMobileNav(false)}>
      <Link href="/">
        <i>
          <MdMovieFilter />
        </i>
        <span>MoviesLibLBS</span>
      </Link>
    </S.HeaderLogoContainer>
  );
};
