import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  ProductArea,
  ProductButtons,
  ProductPhoto,
  ProductInfoArea,
  ProductDetails,
  ProductQuantityArea,
  ProductName,
  ProductIngredients,
  ProductButton,
} from './styled';

const ModalProduct = ({ data }) => (
  <Container>
    <ProductArea>
      <ProductPhoto src={data.image} />

      <ProductInfoArea>
        <ProductDetails>
          <ProductName>
            {data.name}
          </ProductName>

          <ProductIngredients>
            {data.ingredients}
          </ProductIngredients>
        </ProductDetails>

        <ProductQuantityArea>
          ...
        </ProductQuantityArea>
      </ProductInfoArea>
    </ProductArea>

    <ProductButtons>
      <ProductButton>Cancelar</ProductButton>

      <ProductButton>Adicionar ao Carrinho</ProductButton>
    </ProductButtons>
  </Container>
);

ModalProduct.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    id_cat: PropTypes.number,
    image: PropTypes.string,
    ingredients: PropTypes.string,
    name: PropTypes.string,
    points: PropTypes.number,
    price: PropTypes.number,
  }).isRequired,
};

export default ModalProduct;
