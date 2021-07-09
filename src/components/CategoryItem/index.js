import React from 'react';
import PropTypes from 'prop-types';
import { Container, CategoryImage } from './styled';

const CategoryItem = ({ data, activeCategory, setActiveCategory }) => (
  <Container data-tip={data.name} data-for="tip-top" active={activeCategory} id={data.id} onClick={() => setActiveCategory(data.id)}>
    <CategoryImage src={data.image} />
  </Container>
);

CategoryItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  activeCategory: PropTypes.number.isRequired,
  setActiveCategory: PropTypes.func.isRequired,
};

export default CategoryItem;
