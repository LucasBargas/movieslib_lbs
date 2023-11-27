import * as S from './styles';

interface Props {
  children: JSX.Element[];
}

export const AppWrapper = (props: Props) => {
  return <S.AppWrapperContainer>{props.children}</S.AppWrapperContainer>;
};
