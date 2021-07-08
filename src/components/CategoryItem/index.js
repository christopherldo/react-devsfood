import React from 'react';
import PropTypes from 'prop-types';
import { Container, CategoryImage } from './styled';

const CategoryItem = ({ data, activeCategory, setActiveCategory }) => (
  <Container active={activeCategory} id={data.id} onClick={() => setActiveCategory(data.id)}>
    <CategoryImage src={data.image} />
  </Container>
);

CategoryItem.propTypes = {
  data: PropTypes.arrayOf.isRequired,
  activeCategory: PropTypes.number.isRequired,
  setActiveCategory: PropTypes.func.isRequired,
};

export default CategoryItem;
