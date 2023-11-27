import React from 'react';
import * as S from './styles';
import { useRouter } from 'next/navigation';
import { IoClose, IoSearchSharp } from 'react-icons/io5';

interface Props {
  setMobileNav: React.Dispatch<React.SetStateAction<boolean>>;
}

export const HeaderSearch = (props: Props) => {
  const [clearButton, setClearButton] = React.useState(false);
  const [input, setInput] = React.useState('');
  const inputRef = React.useRef<HTMLInputElement>(null);
  const { push } = useRouter();

  const handleFocusOnInput = (): void => {
    if (!inputRef.current) return;
    inputRef.current.focus();
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    if (input.length === 0 || !input.trim()) return;
    push(`/pesquisa?filme=${input}&pagina=1`);
    handleFocusOnInput();
    setInput('');
    props.setMobileNav(false);
  };

  const handleBlur = (): void => {
    if (input.length > 0)
      setTimeout(() => {
        setClearButton(false);
      }, 100);
  };

  const handleClearInput = () => {
    handleFocusOnInput();
    setInput('');
  };

  React.useEffect(() => {
    return input.length === 0 ? setClearButton(false) : setClearButton(true);
  }, [input.length]);

  return (
    <S.HeaderSearchContainer onSubmit={handleSubmit}>
      <div>
        <input
          ref={inputRef}
          type="text"
          placeholder="Busque por um filme"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onBlur={handleBlur}
          onFocus={() => input.length > 0 && setClearButton(true)}
          onMouseOver={() => input.length > 0 && setClearButton(true)}
        />

        {clearButton && (
          <button type="button" onClick={handleClearInput}>
            <IoClose />
          </button>
        )}
      </div>
      <button type="submit">
        <IoSearchSharp />
      </button>
    </S.HeaderSearchContainer>
  );
};
