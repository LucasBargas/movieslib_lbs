import Link from 'next/link';
import * as S from './styles';
import { usePathname } from 'next/navigation';

interface Props {
  mobileNav: boolean;
  setMobileNav: React.Dispatch<React.SetStateAction<boolean>>;
}

interface INav {
  id: string;
  title: string;
  path?: string;
  secondPath?: string;
}

const navList: INav[] = [
  { id: '1', title: 'Início', path: '/', secondPath: '/' },
  {
    id: '2',
    title: 'Mais populares',
    path: '/mais-populares?pagina=1',
    secondPath: '/mais-populares',
  },
  {
    id: '3',
    title: 'Melhores avaliados',
    path: '/melhores-avaliados?pagina=1',
    secondPath: '/melhores-avaliados',
  },
  {
    id: '4',
    title: 'Em cartaz',
    path: '/em-cartaz?pagina=1',
    secondPath: '/em-cartaz',
  },
  {
    id: '5',
    title: 'Em breve',
    path: '/em-breve?pagina=1',
    secondPath: '/em-breve',
  },
  {
    id: '6',
    title: 'Gêneros',
    path: '/generos?pagina=1',
    secondPath: '/generos',
  },
];

export const HeaderNav = (props: Props) => {
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>): void => {
    if (e.currentTarget.id === '/generos?pagina=1') {
      e.preventDefault();
      return;
    }

    props.setMobileNav(false);
  };

  return (
    <S.HeaderNavContainer mobileNav={props.mobileNav}>
      <ul>
        {navList.map((item) => (
          <S.HeadeNavItem key={item.id} active={pathname === item.secondPath}>
            <Link onClick={handleClick} href={item.path!} id={item.path}>
              {item.title}
            </Link>
          </S.HeadeNavItem>
        ))}
      </ul>
    </S.HeaderNavContainer>
  );
};
