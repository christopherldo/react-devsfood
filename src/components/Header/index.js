import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Logo, SearchInput } from './styled';

const Header = ({ search, onSearch }) => {
  const [inputActive, setInputActive] = useState(!!search);

  const handleInputFocus = () => {
    setInputActive(true);
  };

  const handleInputBlur = () => {
    if (search === '') {
      setInputActive(false);
    }
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
        value={search}
        onChange={(e) => onSearch(e.target.value)}
      />
    </Container>
  );
};

Header.propTypes = {
  search: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default Header;
