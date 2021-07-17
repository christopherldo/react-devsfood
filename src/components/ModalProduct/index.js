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
  ProductQuantity,
  ProductQtImage,
  ProductQtText,
  ProductPrice,
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
          <ProductQuantity>
            <ProductQtImage src="./assets/minus.png" />

            <ProductQtText>
              1
            </ProductQtText>

            <ProductQtImage src="./assets/plus.png" />
          </ProductQuantity>

          <ProductPrice>
            R$
            {' '}
            {parseFloat(data.price).toFixed(2)}
          </ProductPrice>
        </ProductQuantityArea>
      </ProductInfoArea>
    </ProductArea>

    <ProductButtons>
      <ProductButton small>Cancelar</ProductButton>

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
