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
} from './styled';

const ModalProduct = ({ data }) => (
  <Container>
    <ProductArea>
      <ProductPhoto src={data.image} />

      <ProductInfoArea>
        <ProductDetails>
          {data.name}
        </ProductDetails>

        <ProductQuantityArea>
          ...
        </ProductQuantityArea>
      </ProductInfoArea>
    </ProductArea>

    <ProductButtons>
      ...
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
