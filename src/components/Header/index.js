import React, { useState } from 'react';
import { Container, Logo, SearchInput } from './styled';

const Header = () => {
  const [inputActive, setInputActive] = useState(false);

  const handleInputFocus = () => {
    setInputActive(true);
  };

  const handleInputBlur = () => {
    setInputActive(false);
  };

  return (
    <Container>
      <Logo src="/assets/logo.png" />
      <SearchInput
        active={inputActive}
        type="text"
        placeholder="Digite um produto..."
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
    </Container>
  );
};

export default Header;
