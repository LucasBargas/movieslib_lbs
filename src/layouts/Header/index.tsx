import React from 'react';
import * as S from './styles';
import { AppContainer } from '../../components/AppContainer';
import { HeaderLogo } from './HeaderLogo';
import { HeaderNav } from './HeaderNav';
import { HeaderSearch } from './HeaderSearch';
import { BsList } from 'react-icons/bs';
import { IoClose } from 'react-icons/io5';

export const Header = (): JSX.Element => {
  const [mobileNav, setMobileNav] = React.useState(false);

  return (
    <S.HeaderContainer>
      <AppContainer>
        <S.HeaderArea>
          <HeaderLogo setMobileNav={setMobileNav} />
          <HeaderSearch setMobileNav={setMobileNav} />
          <HeaderNav mobileNav={mobileNav} setMobileNav={setMobileNav} />
          <S.HeaderMobileButton>
            <button onClick={() => setMobileNav(!mobileNav)}>
              {mobileNav ? <IoClose /> : <BsList />}
            </button>
          </S.HeaderMobileButton>
        </S.HeaderArea>
      </AppContainer>
    </S.HeaderContainer>
  );
};
