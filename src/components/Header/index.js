import React from 'react';
import { Container, Logo, SearchInput } from './styled';

const Header = () => (
  <Container>
    <Logo src="/assets/logo.png" />
    <SearchInput type="text" placeholder="Digite um produto" />
  </Container>
);

export default Header;
