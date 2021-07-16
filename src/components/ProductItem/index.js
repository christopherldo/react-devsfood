import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  ProductPhotoArea,
  ProductInfoArea,
  ProductButtonArea,
  ProductPhoto,
  ProductName,
  ProductPrice,
  ProductIngredients,
  ProductButton,
} from './styled';

const ProductItem = ({ data, onClick }) => {
  const handleClick = () => {
    onClick(data);
  };

  return (
    <Container onClick={handleClick}>
      <ProductPhotoArea>
        <ProductPhoto src={data.image} />
      </ProductPhotoArea>

      <ProductInfoArea>
        <ProductName>{data.name}</ProductName>
        <ProductPrice>
          R$
          {' '}
          {parseFloat(data.price).toFixed(2)}
        </ProductPrice>
        <ProductIngredients>{data.ingredients}</ProductIngredients>
      </ProductInfoArea>

      <ProductButtonArea>
        <ProductButton src="./assets/next.png" />
      </ProductButtonArea>
    </Container>
  );
};

ProductItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    id_cat: PropTypes.number,
    image: PropTypes.string.isRequired,
    ingredients: PropTypes.string,
    name: PropTypes.string.isRequired,
    points: PropTypes.number,
    price: PropTypes.number.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ProductItem;
