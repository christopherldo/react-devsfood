import React from 'react';
import {
  Container,
  ProductArea,
  ProductButtons,
  ProductPhoto,
  ProductInfoArea,
  ProductDetails,
  ProductQuantityArea,
} from './styled';

const ModalProduct = () => (
  <Container>
    <ProductArea>
      <ProductPhoto src="" />

      <ProductInfoArea>
        <ProductDetails>
          ...
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

export default ModalProduct;
