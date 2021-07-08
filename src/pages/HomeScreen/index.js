import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, CategoryArea, CategoryList } from './styled';

import Header from '../../components/Header';
import CategoryItem from '../../components/CategoryItem';

import api from '../../api';

const HomeScreen = () => {
  const history = useHistory();
  const [headerSearch, setHeaderSearch] = useState('');
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    try {
      const cat = await api.getCategories();
      if (cat.error === '') {
        setCategories(cat.result);
      }
    } catch (error) {
      alert(`${error}: ${error.message}`);
    }
  };

  useEffect(async () => {
    getCategories();
  }, []);

  return (
    <Container>
      <Header search={headerSearch} onSearch={setHeaderSearch} />
      {categories.length > 0
          && (
          <CategoryArea>
            Selecione uma categoria

            <CategoryList>
              <CategoryItem title="Todas as Categorias" image="food-and-restaurant.png" />
            </CategoryList>
          </CategoryArea>
          )}
    </Container>
  );
};

export default HomeScreen;
