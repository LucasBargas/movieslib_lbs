import * as S from './styles';

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const AppContainer = (props: Props) => {
  return <S.AppContainerArea>{props.children}</S.AppContainerArea>;
};
