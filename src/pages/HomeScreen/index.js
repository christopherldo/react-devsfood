import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';

import {
  Container,
  CategoryArea,
  CategoryList,
  ProductArea,
  ProductList,
  ProductPaginationArea,
  ProductPaginationItem,
} from './styled';

import Header from '../../components/Header';
import CategoryItem from '../../components/CategoryItem';
import ProductItem from '../../components/ProductItem';

import api from '../../api';

const HomeScreen = () => {
  const history = useHistory();
  const [headerSearch, setHeaderSearch] = useState('');
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState([]);

  const [activeCategory, setActiveCategory] = useState(0);
  const [activePage, setactivePage] = useState(1);

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

  const getProducts = async () => {
    try {
      const prods = await api.getProducts();
      if (prods.error === '') {
        setProducts(prods.result.data);
        setactivePage(prods.result.page);

        setTotalPages(() => {
          const pagesArray = [];
          for (let i = 0; i < prods.result.pages; i += 1) {
            pagesArray.push(i);
          }
          return pagesArray;
        });
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
    getProducts();
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

      {products.length > 0
      && (
      <ProductArea>
        <ProductList>
          {products.map((item) => (
            <ProductItem key={item.id} data={item} />
          ))}
        </ProductList>
      </ProductArea>
      )}

      {totalPages.length > 0
      && (
        <ProductPaginationArea>
          {totalPages.map((item) => (
            <ProductPaginationItem key={item}>
              {item + 1}
            </ProductPaginationItem>
          ))}
        </ProductPaginationArea>
      )}
    </Container>
  );
};

export default HomeScreen;
