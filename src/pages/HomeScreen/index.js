import React, { useState } from 'react';
import Container from './styled';
import Header from '../../components/Header';

const HomeScreen = () => {
  const [headerSearch, setHeaderSearch] = useState('');

  return (
    <Container>
      <Header search={headerSearch} onSearch={setHeaderSearch} />
    </Container>
  );
};

export default HomeScreen;
