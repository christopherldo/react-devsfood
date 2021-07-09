import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';

import { Container, CategoryArea, CategoryList } from './styled';
import Header from '../../components/Header';
import CategoryItem from '../../components/CategoryItem';

import api from '../../api';

const HomeScreen = () => {
  const history = useHistory();
  const [headerSearch, setHeaderSearch] = useState('');
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(0);

  const getCategories = async () => {
    try {
      const cat = await api.getCategories();
      if (cat.error === '') {
        setCategories(cat.result);

        ReactTooltip.rebuild();
      }
    } catch (error) {
      // eslint-disable-next-line no-alert
      alert(`${error}: ${error.message}`);
    }
  };

  useEffect(async () => {
    getCategories();
  }, []);

  useEffect(() => {

  }, [activeCategory]);

  return (
    <Container>
      <Header search={headerSearch} onSearch={setHeaderSearch} />
      {categories.length > 0
          && (
          <CategoryArea>
            Selecione uma categoria

            <CategoryList>
              <CategoryItem data={{ id: 0, name: 'Todas as Categorias', image: './assets/food-and-restaurant.png' }} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
              {categories.map((item) => (
                <CategoryItem
                  key={item.id}
                  data={item}
                  activeCategory={activeCategory}
                  setActiveCategory={setActiveCategory}
                />
              ))}
            </CategoryList>
          </CategoryArea>
          )}
    </Container>
  );
};

export default HomeScreen;
